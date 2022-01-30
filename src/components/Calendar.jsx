import React from "react";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";

const useStyles = makeStyles((theme) => ({
  error: {
    fontSize: "1rem",
    // fontFamily: "Roboto, sans-serif",
    color: "#D32F2F",
    marginRight: 150,
    transform: "translateY(-20px)",
  },
}));

function Calendar({ value, setPickedDate, error }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} style={{ transform: "translate(-10px)" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          required
          date={value}
          inputFormat="dd/MM/yyyy"
          onChange={(newValue) => setPickedDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
          minDate={new Date("2022-03-16")}
          maxDate={new Date("2022-03-26")}
          defaultCalendarMonth={new Date("2022-03")}
          error={!!error}
        />
        {error && <div className={classes.error}>{error}</div>}
      </LocalizationProvider>
    </Grid>
  );
}

export default Calendar;
