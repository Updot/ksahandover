import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownIcon from "./DownIcon";
import { useLangContext } from "../contexts/LanguageContext";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    margin: "10px 0 !important",
  },
  field: {
    backgroundColor: theme.palette.grey.light,
    border: "none !important",
    borderRadius: 5,
    boxShadow: " 0px 2px 0px rgba(19, 44, 112, 0.25)",
    textAlign: "left",
  },
  arrow: {
    position: "absolute",
    top: 14,
    right: 18,
    transition: "all 0.5s ease !important",
  },
}));

function CustomButton({ isOpen, setIsOpen }) {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      elevation={0}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      style={{
        backgroundColor: "#06185f",
        height: 57,
        minWidth: 60,
        zIndex: 10,
      }}
    >
      <DownIcon
        style={
          isOpen
            ? {
                transform: "rotate(180deg)",
                transition: "all 0.5s ease !important",
              }
            : { transform: "rotate(0)", transition: "all 0.5s ease !important" }
        }
        className={classes.arrow}
      />
    </Button>
  );
}

function CustomSelect({ value, setProvince, sm, error = null }) {
  const lang = useLangContext();

  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <Grid item xs={12} sm={sm} style={{ padding: "0 5px" }}>
      <Box className={classes.box}>
        <FormControl fullWidth error={!!error}>
          <InputLabel>
            {lang === "English" ? <>Country</> : <>الدولة</>}
          </InputLabel>
          <Select
            value={value}
            onChange={handleChange}
            className={`select-field ${classes.field}`}
            style={{ width: "100%", margin: 0 }}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            IconComponent={() => (
              <CustomButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            open={isOpen}
          >
            <MenuItem value={"United Arab Emirates"}>
              {lang === "English" ? <>United Arab Emirates</> : <>الإمارات</>}
            </MenuItem>
            <MenuItem value={"Saudi Arabia"}>
              {lang === "English" ? <>Saudi Arabia</> : <>السعودية</>}
            </MenuItem>
            <MenuItem value={"Qatar"}>
              {lang === "English" ? <>Qatar</> : <>قطر</>}
            </MenuItem>
            <MenuItem value={"Oman"}>
              {lang === "English" ? <>Oman</> : <>عُمان</>}
            </MenuItem>
            <MenuItem value={"Kuwait"}>
              {lang === "English" ? <>Kuwait</> : <>الكويت</>}
            </MenuItem>
            <MenuItem value={"Bahrain"}>
              {lang === "English" ? <>Bahrain</> : <>البحرين</>}
            </MenuItem>
          </Select>
          {error && (
            <FormHelperText
              style={{
                // fontFamily: "Roboto, sans-serif",
                fontSize: 17,
              }}
            >
              {error}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
    </Grid>
  );
}

export default CustomSelect;
