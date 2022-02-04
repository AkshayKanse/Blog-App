import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect, } from "react";
import { getAllPosts } from "../../service/api.js";
const Posts = () => {
  const [posts, setPost] = useState([]);
  const{search}=useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search);
      // console.log(data);
      setPost(data)// pass data into setPost so data comes in posts
    };
    fetchData(); //calling
  }, [search]);
  console.log(posts)
  return posts.map((post)=>(
    <Grid item lg={3} sm={4} xs={12}>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* textDecoration used for remove underline & for remove color use inherit  */}
        <Post post={post} />
      </Link>
    </Grid>
  ));
};
export default Posts;
