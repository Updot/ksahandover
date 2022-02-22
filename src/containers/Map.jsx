import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    // fontFamily: "Agaramond, serif",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "white",
    margin: "0 0 40px 0",
    textTransform: "uppercase",

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      textAlign: "left",
      margin: "0 20px 0 10%",
    },
  },
  map: {
    padding: 0,
    margin: "auto",

    [theme.breakpoints.up("md")]: {
      paddingRight: 50,
      textAlign: "center",
    },
  },
}));

function Map() {
  const classes = useStyles();

  return (
    <Grid
      style={{ marginTop: 170, marginBottom: 100 }}
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <p className={classes.text}>King Fahad national library, Riyadh</p>
      </Grid>
      <Grid
        className={classes.map}
        style={{ margin: "auto" }}
        item
        xs={11}
        md={6}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2005078221305!2d46.68434421455496!3d24.685633184136663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03423a5a0c73%3A0xf737561f81ceeb4a!2sking%20Fahad%20National%20Library!5e0!3m2!1sen!2sin!4v1640301709383!5m2!1sen!2sin"
          style={{
            border: 0,
            width: "100%",
            height: 700,
            borderRadius: 20,
          }}
          loading="lazy"
        ></iframe>
      </Grid>
    </Grid>
  );
}

export default Map;
