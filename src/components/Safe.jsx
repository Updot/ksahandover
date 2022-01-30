import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLangContext } from "../contexts/LanguageContext";
import image from "../images/lock.svg";

const useStyles = makeStyles(() => ({
  container: {
    margin: "40px 0",
    textAlign: "left",
  },
  image: {
    margin: "10px 0 0 20px",
    width: 20,
  },
  title: {
    // fontFamily: "Alef, sans-serif",
    fontSize: "1.2rem",
  },
  text: {
    // fontFamily: "Alef, sans-serif",
    fontSize: "1rem",
    color: "#B1B1B1",
  },
}));

function Safe() {
  const lang = useLangContext();

  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item xs={2} sm={1}>
        <img className={classes.image} src={image} alt="lock" />
      </Grid>
      <Grid item xs={8} sm={9}>
        <p className={classes.title}>
          {lang === "English" ? (
            <>Your Information is Safe</>
          ) : (
            <>بياناتك الشخصية محميّة وسريّة</>
          )}
        </p>
        <p className={classes.text} style={{ marginTop: 5 }}>
          We respect your privacy and do not tolerate spam and will never sell,
          rent, lease or give away your information to any third party. Nor will
          we send you unsolicited email.
        </p>
      </Grid>
    </Grid>
  );
}

export default Safe;
