import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useLangContext } from "../contexts/LanguageContext";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    // fontFamily: "Alef, sans-serif",
    fontSize: "1.3rem",
    marginLeft: 10,
    marginBottom: 20,
    userSelect: "none",

    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  paper: {
    backgroundColor: theme.palette.grey.light,
    // fontFamily: "Inter, sans-serif",
    fontSize: "1.2rem",
    padding: "15px 0",
    borderRadius: 5,
    boxShadow: " 0px 2px 0px rgba(19, 44, 112, 0.25)",
    letterSpacing: 2,
    fontWeight: 500,
  },
  timeContainer: {
    "@media (max-width: 1000px)": {
      fontSize: "0.8rem",
    },
  },
}));

function Info({ value }) {
  const lang = useLangContext();

  const classes = useStyles();

  return (
    <>
      <p className={classes.title}>
        {lang === "English" ? (
          <>Select date</>
        ) : (
          <p style={{ textAlign: "right", paddingRight: 10 }}>
            التاريخ المُختار
          </p>
        )}
      </p>
      <Grid
        style={!!value ? { color: "#06185f" } : { color: "#BDBDBD" }}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={3}>
          <div className={classes.paper}>
            {!!value ? <span>{value.getDate()}</span> : <span>00</span>}
          </div>
          <p
            style={{
              // fontFamily: "Inter, sans-serif",
              fontSize: 12,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            {lang === "English" ? <>DATE</> : <>اليوم</>}
          </p>
        </Grid>
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={3}>
          <div className={classes.paper}>
            {!!value ? <span>03</span> : <span>00</span>}
          </div>
          <p
            style={{
              // fontFamily: "Inter, sans-serif",
              fontSize: 12,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            {lang === "English" ? <>MONTH</> : <>الشهر</>}
          </p>
        </Grid>
        <Grid style={{ textAlign: "center", userSelect: "none" }} item xs={5}>
          <div className={classes.paper}>
            {!!value ? <span>2022</span> : <span>0000</span>}
          </div>
          <p
            style={{
              // fontFamily: "Inter, sans-serif",
              fontSize: 12,
              marginTop: 10,
              color: "#C2C2C2",
              userSelect: "none",
            }}
          >
            {lang === "English" ? <>YEAR</> : <>السنة</>}
          </p>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginTop: 30,
          // fontFamily: "Inter, sans-serif",
          userSelect: "none",
        }}
      >
        <div className={classes.timeContainer}>
          <AccessTimeIcon
            style={{ color: "#CACACA", transform: "translateY(5px)" }}
          />
          <span style={{ color: "#CACACA", marginLeft: 10 }}>
            {lang === "English" ? <>OPENING HOURS -</> : <>ساعات العرض -</>}
          </span>
          <span style={{ fontWeight: 500, color: "#444", marginLeft: 10 }}>
            {lang === "English" ? (
              <>11AM to 10PM</>
            ) : (
              <>من ١١ صباحاً حتى ١٠ مساءً</>
            )}
          </span>
        </div>
      </Grid>
    </>
  );
}

export default Info;
