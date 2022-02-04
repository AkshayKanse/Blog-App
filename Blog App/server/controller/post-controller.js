import Post from "../schema/post-schema.js";

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("Blog save Successfully");
  } catch (error) {
    response.status(500).json(error); // status 500 for internal server error
  }
};

export const getAllPosts = async (request, response) => {
  console.log(request.body);
  let username = request.query.username;
  let categories = request.query.categories;
  let posts;
  try {
    if (username) {
      posts = await Post.find({ username: username });
    } else if (categories) {
      posts = await Post.find({ categories: categories });
    } else {
      posts = await Post.find({});
    }
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error); // status 500 for internal server error
  }
};

export const getPost = async (request, response) => {
  console.log(request.body);
  try {
    let post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error); // status 500 for internal server error
  }
};
export const updatePost = async (request, response) => {
  console.log(request.body);
  try {
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body }); //$set for object replace
    response.status(200).response("Blog Updated Successfully");
  } catch (error) {
    response.status(500).json(error); // status 500 for internal server error
  }
};
export const deletePost = async (request, response) => {
  console.log(request.body);
  try {
    let post = await Post.findById(request.params.id); //$set for object replace
    await post.delete();
    response.status(200).response("Blog Delete Successfully");
  } catch (error) {
    response.status(500).json(error); // status 500 for internal server error
  }
};
