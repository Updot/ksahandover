import React from "react";
import { Link } from "react-router-dom";
import { Grid, Checkbox, FormControl, FormHelperText } from "@mui/material";
import { useLangContext } from "../contexts/LanguageContext";

function Legal({ legalCheck, setLegalCheck, error }) {
  const lang = useLangContext();

  return (
    <Grid item xs={12} style={{ textAlign: "left" }}>
      <FormControl className="title-container" error={!!error}>
        {lang === "English" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
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
              By checking this box I agree that I have read and accepted the{" "}
              <Link to="/privacy-policy">privacy notice</Link>. If you are a
              minor, you must let your parent or guardian know about our{" "}
              <Link to="/privacy-policy">privacy notice</Link>.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "right",
            }}
          >
            <p
              style={{ display: "inline", padding: "0 20px", direction: "rtl" }}
            >
              عبر وصعي إشارة في هذا المربّع أوافق على أنني اطلعت وقبلت{" "}
              <Link to="/privacy-policy">بإشعار الخصوصيّة</Link>. إذا كنت
              قاصراً، فالمطلوب من ذويك أو الوصي عليك الإطلاع على{" "}
              <Link to="/privacy-policy">إشعار الخصوصيّة</Link> الخاص بنا.
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
