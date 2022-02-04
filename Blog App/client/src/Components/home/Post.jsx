import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  container: {
    height:380,
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    " & > *": {
      padding: "0 8px 8px 8px",
    },
  },
  img: {
    height:210,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  Heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign:"center"
  },
  details: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});
const Post = ({post}) => {
  const classes = useStyle();

  const handleTitleDescription=(str,limit)=>{
     return str.length>limit?str.substring(0,limit)+"...":str;
  }

  const url =post.picture ||
    "https://www.gettyimages.in/gi-resources/images/HomepageCurationTilesUK/2021_2_FEBRUARY/SPORT_x9.jpg";
  return (
    <Box className={classes.container}>
      <img src={url} alt="Sport" className={classes.img} />
  <Typography className={classes.text}>{post.categories}</Typography>
  <Typography className={classes.Heading}>{handleTitleDescription(post.title,20)}</Typography>
      <Typography className={classes.text}>{post.username}</Typography>
      <Typography className={classes.details}>{handleTitleDescription(post.description,100)}</Typography>
    </Box>
  );
};
export default Post;
