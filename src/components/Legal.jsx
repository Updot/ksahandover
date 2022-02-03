import React from "react";
import {
  Grid,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useLangContext } from "../contexts/LanguageContext";

function Legal({ legalCheck, setLegalCheck, error }) {
  const lang = useLangContext();

  return (
    <Grid item xs={12} style={{ textAlign: "left" }}>
      <FormControl className="title-container" error={!!error}>
        {/* <FormLabel style={{ marginRight: 20, fontSize: "1.2rem" }}>
          {lang === "English" ? <>Title</> : <>اللقب</>}
        </FormLabel> */}
        {lang === "English" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              //   marginBottom: 20,
            }}
          >
            <Checkbox
              name="mr"
              value={true}
              onChange={() => {
                setLegalCheck((prev) => !prev);
              }}
              checked={legalCheck === true ? true : false}
              className={legalCheck === true ? "checked" : "unchecked"}
            />
            <p style={{ display: "inline", padding: "0 20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              ipsum expedita, quod totam ad labore alias, rem pariatur quis eum!
              Hic magni iste illo eum, consequuntur natus mollitia at.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "right",
              //   marginBottom: 20,
            }}
          >
            <p style={{ display: "inline", padding: "0 20px" }}>
              نتيجة طبيعية موليتية فينتيجة طبيعية موليتية فينتيجة طبيعية موليتية
              فينتيجة طبيعية موليتية فينتيجة طبيعية موليتية فينتيجة طبيعية
              موليتية فينتيجة طبيعية موليتية فيطبيعية موليتية فيطبيعية موليتية
              فيطبيعية موليتية في
            </p>
            <Checkbox
              name="mr"
              value={true}
              onChange={() => {
                setLegalCheck((prev) => !prev);
              }}
              checked={legalCheck === true ? true : false}
              className={legalCheck === true ? "checked" : "unchecked"}
            />
          </div>
        )}

        <FormHelperText
          style={{ fontSize: "1.1rem", margin: "10px 0 20px 20px" }}
        >
          {error}
        </FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default Legal;
