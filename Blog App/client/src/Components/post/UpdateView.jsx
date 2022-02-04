import {useParams, useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { getPost,updatePost,uploadFile} from "../../service/api";

import {
    Box,
    makeStyles,
    FormControl,
    InputBase,
    Button,
    TextareaAutosize,
  } from "@material-ui/core";
  import { AddCircle } from "@material-ui/icons";
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
      // objectFit: "cover",
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
    textArea:
    {
        width:"100%",
        marginTop:30,
        border:"none",
        fontSize:18,
        '&:focus-visible':
        {
            outline:"none"
        }
  
    }
  }));

  const values = {
    title: '',
    description: '',
    picture: '',
    username: 'akshay',
    categories: 'All',
    createDate: new Date(),
  };
  const UpdateView = () => {
    const {id} =useParams();
    const classes = useStyle();
    const history=useHistory();
    const [post, setPost] = useState({values});
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
        const url =post.picture ? post.picture : "https://stillmed.olympics.com/media/Images/Beyond-the-Games/Gender-Equality-in-Sport/gender-equality-banner.jpg";
       
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
     
      useEffect(() => {
        const fetchData = async () => {
          let data = await getPost(id);
          console.log(data);
          setPost(data);
        };
        fetchData();
      }, []);
      const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})//...rest operator
        
      }
      const updateBlog=async()=>{
        await updatePost(id,post);
      history.push(`/details/${id}`)
      }
      return (
      <Box className={classes.container}>
        <img className={classes.image} src={url} alt="Banner" />
        <FormControl className={classes.form}>
        <label htmlFor="file">
        <AddCircle fontSize="large" color="action" />
        </label>
      <input
      type="file"
      id="file"
      style={{display:"none"}}
      onChange={(e) =>setFile(e.target.files[0])}
             />
          <InputBase placeholder="Title"name="title" onChange={(e) => handleChange(e)} value={post.title} className={classes.textfield} />
          <Button onClick={()=>updateBlog()} variant="contained" color="primary">Update</Button>
        </FormControl>
        <TextareaAutosize
        rowsMin={5}
        placeholder="Enter your story"
        className={classes.textArea}
        value={post.description}
        onChange={(e) => handleChange(e)}
        name="description"
        />
      </Box>
    );
  };
  export default UpdateView;
  