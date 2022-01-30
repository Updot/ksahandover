import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../images/Logo.png";
import Pin from "../images/PinWhite.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff0a",
    zIndex: 100,
  },
  logo: {
    margin: "19px auto",

    [theme.breakpoints.up("sm")]: {
      margin: "10px auto",
    },
  },
  logoImage: {
    width: 100,

    [theme.breakpoints.up("sm")]: {
      width: 140,
    },
  },
  pin: {
    position: "absolute",
    cursor: "pointer",

    [theme.breakpoints.up("xs")]: {
      width: 20,
      height: 20,
      top: 30,
      right: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: 25,
      height: 25,
      top: 30,
      right: 50,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img className={classes.logoImage} src={Logo} alt="Chaumet" />
      </Link>
      <Link to="/map">
        <img className={classes.pin} src={Pin} alt="location" />
      </Link>
    </Grid>
  );
}

export default Header;
