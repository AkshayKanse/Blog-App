
import { Box,TextareaAutosize,Button,makeStyles } from "@material-ui/core"
import {Delete} from '@material-ui/icons';
import {deleteComment} from '../../service/api.js'
import {useState,useEffect} from 'react'
import {newComment,getComments} from "../../service/api.js"
import Comment from './Comment';
const useStyles=makeStyles({
    component:{
        marginTop:100,
        display:"flex"
    },
    image:
    {
        width:60,
        height:60,
        borderRadius:"50%"
    },
    Text:
    {
        width:"100%",
        margin:"0 20px"
    },
    button:
    {
        height:40
    }

});
const initialvalue={
    name:" ",
    postId:"",
    date:new Date(),
    comments:""
}
const Comments=({post})=>{
const classes=useStyles();
const[comment,setComment]=useState(initialvalue)
const[comments,setComments]=useState([])
const [toggle, setToggle]= useState(false)
useEffect(()=>{
const getData=async()=>{
   let response= await getComments(post._id)
   setComments(response)
}
getData();
},[post,toggle])
const handleChange=(e)=>
{
    setComment({
        ...comment,
        name:post.username,
        postId:post._id,
        comments:e.target.value
    })
}

const postComment=async()=>{
await newComment(comment)
setToggle(prev => !prev);
}
    return(
        <Box>
            <Box className={classes.component}>
                <img className={classes.image}src="https://static.thenounproject.com/png/76795-200.png" alt="img"/>
                <TextareaAutosize className={classes.Text}
              rowsMin={5}
              onChange={(e)=>handleChange(e)}/>
              <Button
              variant="contained"
              color='primary'
               size='medium'
                 className={classes.button}
                 onClick={()=>postComment()}>Post</Button>
          </Box>
          {
              comments && comments.map(comment =>(
                  <Comment comment={comment} setToggle={setToggle}/>
              ))
          }
      </Box>
    )

}
 
export default Comments;