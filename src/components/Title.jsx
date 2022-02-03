import React from "react";
import {
  Grid,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useLangContext } from "../contexts/LanguageContext";

function Title({ value, setTitle, error = null }) {
  const lang = useLangContext();

  return (
    <Grid item xs={12} style={{ marginLeft: 20, textAlign: "left" }}>
      <FormControl
        className="title-container"
        style={{ display: "contents" }}
        error={!!error}
      >
        <FormLabel style={{ marginRight: 20, fontSize: "1.2rem" }}>
          {lang === "English" ? <>Title</> : <>اللقب</>}
        </FormLabel>
        <p style={{ display: "inline" }}>
          {lang === "English" ? <>Mr.</> : <>السيد</>}
        </p>
        <Checkbox
          name="mr"
          value={true}
          onChange={() => {
            setTitle(true);
          }}
          checked={value === true ? true : false}
          className={value === true ? "checked" : "unchecked"}
        />
        <p style={{ display: "inline" }}>
          {lang === "English" ? <>Mrs.</> : <>السيّدة</>}
        </p>
        <Checkbox
          name="mr"
          value={false}
          onChange={() => {
            setTitle(false);
          }}
          checked={value === false ? true : false}
          className={value === false ? "checked" : "unchecked"}
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Title;
