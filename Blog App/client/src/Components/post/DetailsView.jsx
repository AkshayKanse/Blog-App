import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link, useParams, useHistory} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getPost,deletePost } from "../../service/api";
import Comments from "../comments/Comments.jsx"
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
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  Subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const DetailsView = () => {
  const { id } = useParams();
  const classes = useStyle();
  const history=useHistory();
  const url = "https://wallpapercave.com/wp/aYgfwFv.jpg";
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);
  const deleteBlog=async()=>
  {
    await deletePost(post._id);
    history.push('/')
  }
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={post.picture || url} alt="Banner" />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete onClick={()=>deleteBlog()}  className={classes.icon} color="error" />
        
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.Subheading}>
        <Link to={`/?username=${post.username}`}  className={classes.link}>
        <Typography  style={{ fontWeight: 600 }}>{post.username}</Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createDate).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
      <Comments post={post}/>
    </Box>
  );
  }
export default DetailsView;
