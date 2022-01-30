import React, { useState } from "react";
import { useLangContext } from "../contexts/LanguageContext";
import { Box, IconButton, Button, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "80%",
    maxWidth: 450,
    borderRadius: 18,
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      padding: "50px 30px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "80px 60px",
    },
  },
  closeButton: {
    position: "absolute !important",
    [theme.breakpoints.up("xs")]: {
      top: 20,
      right: 20,
    },
    [theme.breakpoints.up("md")]: {
      top: 40,
      right: 40,
    },
  },
  heading: {
    color: theme.palette.primary.main,
    // fontFamily: "Lateef, serif !important",
    fontSize: "1.1rem",

    [theme.breakpoints.up("xs")]: {
      marginTop: "20px !important",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px !important",
    },
  },
  subtext: {
    // fontFamily: "Alef, sans-serif ",
    fontSize: "1.2rem",
    color: theme.palette.grey.dark,

    [theme.breakpoints.up("xs")]: {
      width: "70%",
      margin: "30px auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
      margin: "40px auto",
    },
  },
  // mailButton: {
  //   // fontFamily: "Alef, sans-serif !important",
  //   display: "block !important",
  //   padding: "5px 30px !important",
  //   fontSize: "1.2rem !important",
  //   width: 150,
  //   margin: "auto !important",
  // },
  storyButton: {
    display: "block !important",
    padding: "5px 30px !important",
    fontSize: "1rem !important",
    width: "85%",
    marginTop: "50px !important",
    margin: "auto !important",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem !important",
    },
  },
}));

function CustomModal({ setSuccess }) {
  const lang = useLangContext();

  const [open, setOpen] = useState(true);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.box}>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h3" className={classes.heading}>
            {lang === "English" ? <>Thank You!</> : <>!شكرا لك</>}
          </Typography>
          <p className={classes.subtext}>
            {lang === "English" ? (
              <>
                A confirmation letter has been sent to your email. Please check
                your inbox.
              </>
            ) : (
              <>
                رسالة التأكيد تم إرسالها إلى بريدك الإلكتروني. من فضلك تفقّد
                بريدك الإلكتروني
              </>
            )}
          </p>
          {/* <Button
            href="https://mail.google.com"
            target="_blank"
            variant="contained"
            disableElevation
            style={{ textTransform: "none" }}
            className={classes.mailButton}
          >
            Go to mail
          </Button> */}
          <Button
            href="https://www.instagram.com/ar/464500204195593/"
            target="_blank"
            variant="contained"
            disableElevation
            style={{ textTransform: "none" }}
            className={classes.storyButton}
          >
            {lang === "English" ? (
              <> Crown Your Stories</>
            ) : (
              <>توّج خاصيّة الستوري الخاصة بك</>
            )}
          </Button>
          <p style={{ color: "#838383", marginTop: 10, fontSize: "1.1rem" }}>
            {lang === "English" ? (
              <> Try our Tiara on Instagram</>
            ) : (
              <>جرّب التاج الخاص بنا على إنستغرام</>
            )}
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
