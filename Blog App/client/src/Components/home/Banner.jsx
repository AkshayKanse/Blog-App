import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    background: `url(${"https://c4.wallpaperflare.com/wallpaper/403/173/85/computer-macro-light-glow-wallpaper-preview.jpg"}) repeat-x black`,
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 70,
      color: "white",
    },
  },
});

const Banner = () => {
  const classes = useStyle();

  return (
    <>
      <Box className={classes.image}>
        <Typography className={classes.text}>
          <b>BLOG APP</b>
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
