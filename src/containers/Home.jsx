import React, { useState, useEffect } from "react";
import { Collapse, Alert, AlertTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Landing from "./Landing";
import Intro from "./Intro";
import Form from "./Form";

const useStyles = makeStyles(() => ({
  alert: {
    position: "fixed",
    top: "100px",
    left: "50%",
    width: "50%",
    minWidth: 300,
    transform: "translate(-50%, -50%)",
    zIndex: 100,
  },
}));

function Home({ isFormOpen, setIsFormOpen }) {
  const [failMessage, setFailMessage] = useState("");

  const classes = useStyles();

  useEffect(() => {
    if (failMessage) {
      const timeId = setTimeout(() => setFailMessage(""), 5000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [failMessage]);

  return (
    <>
      {!!failMessage && (
        <Alert variant="filled" className={classes.alert} severity="error">
          <AlertTitle style={{ fontSize: "1.7rem" }}>Sorry</AlertTitle>
          <p style={{ fontSize: "1.4rem" }}> {failMessage} </p>
        </Alert>
      )}
      <Landing />
      <Intro isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Collapse in={isFormOpen}>
        <Form setFailMessage={setFailMessage} />
      </Collapse>
    </>
  );
}

export default Home;
