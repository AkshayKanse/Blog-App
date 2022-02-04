import axios from "axios"

const URL="http://localhost:4444"
export const createPost=async(post)=>{
try{
    return await axios.post(`${URL}/create`,post)
}
catch(error)
{
    console.log("Error in calling createPost Api",error);
    
}
}
export const getAllPosts=async(param)=>{
try{
    let responce=await axios.get(`${URL}/posts${param}`)
    return responce.data;
}
catch(error)
{
    console.log("Error in calling getAllposts Api",error);
    
}
}
export const getPost=async(id)=>{
    try{
        let responce=await axios.get(`${URL}/post/${id}`)
        return responce.data;
    }
    catch(error)
    {
        console.log("Error in calling getpost Api",error);
        
    }
    }
export const updatePost=async(id,post)=>{
 
    try{
        await axios.post(`${URL}/update/${id}`,post)
        
    }
    catch(error)
    {
        console.log("Error in calling updatepost Api",error);
        
    }
    }
export const deletePost=async(id)=>{
 
    try{
        await axios.delete(`${URL}/delete/${id}`)
        
    }
    catch(error)
    {
        console.log("Error in calling Deletepost Api",error);
        
    }
    }
export const uploadFile=async(data)=>{
 
    try{
      return await axios.post(`${URL}/file/upload`,data)
    }
    catch(error)
    {
        console.log("Error in uploading image",error);
        
    }
    }
export const newComment=async(data)=>{
 
    try{
      return await axios.post(`${URL}/comment/new`,data)
    }
    catch(error)
    {
        console.log("Error while calling comment Api",error);
        
    }
    }
    export const getComments=async(id)=>{
 
        try{
          let response=await axios.get(`${URL}/comments/${id}`)
          return response.data;
        }
        catch(error)
        {
            console.log("Error while calling comment Api",error);
            
        }
        }

        export const deleteComment = async(id)=>{
            try{
               return await axios.delete(`${URL}/comment/delete/${id}`);
                 
            }catch(error){
                console.log('Error while calling deleteComment Api', error);
            }
        }
