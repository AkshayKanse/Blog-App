import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { useOktaAuth } from "@okta/okta-react";
const usestyles = makeStyles({
  component: {
    background: "black",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },

});
const Header = () => {
  const classes = usestyles();
  const history = useHistory();
  // const navigate = useNavigate();

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState && authState.isPending) return null;

  const login = async () =>  history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (<button 
    onClick={logout}
    style={{
      background:'unset',
      color:"white",
      border:"none",
      textTransform:"uppercase",
      fontFamily:"Arial",
      fontSize:17,
      cursor:"pointer"

    }}
    >Logout</button>)
     : ( <button onClick={login}>Login</button>);

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link className={classes.link} to="/">
          <Typography>HOME</Typography>
        </Link>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>{button}</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;