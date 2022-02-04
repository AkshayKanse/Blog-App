
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import {useHistory} from 'react-router-dom'
import {createPost,uploadFile} from '../../service/api'
import { useState,useEffect } from "react";
const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",

  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textArea: {
    width: "100%",
    marginTop: 30,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  }
}));

const values = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createDate: new Date(),
};
const CreateView = () => {
  const classes = useStyle();
 
  const history=useHistory();
    const [post, setPost] = useState(values);
    const [file, setFile] = useState('');
    const [image,setImage] = useState('');
    const url =post.picture ? post.picture :
 "https://c4.wallpaperflare.com/wallpaper/403/173/85/computer-macro-light-glow-wallpaper-preview.jpg";

   
    useEffect(()=>{
     const getImage=async()=>{
        if(file)
        {
const data=new FormData();

data.append("name",file.name);

data.append("file",file);

const image=await uploadFile(data);

post.picture=image.data;

setImage(image.data);

        
        }
      }
      getImage();
    },[file])


  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})//...rest operator
    
  }
  const savePost=async()=>{
    await createPost(post);
    history.push('/');
  }
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Banner" />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
        <AddCircle fontSize="large" color="action" />
        </label>
      <input
       type="file"
      id="fileInput"
      style={{display:"none"}}
      onChange={(e) =>setFile(e.target.files[0])}
             />
        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className={classes.textfield}
          name="title"
        />
        <Button onClick={()=>savePost()} variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Enter your story"
        className={classes.textArea}
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Box>
  );
};
export default CreateView;
