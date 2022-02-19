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
              <Link to="/privacy-policy">
                By ticking this box I agree that I have read and accepted the
                privacy notice. If you are a minor, you must let your parent or
                guardian know about our privacy notice.
              </Link>
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
            <p style={{ display: "inline", padding: "0 20px" }}>
              <Link to="/privacy-policy">
                عبر وضعي إشارة في هذا المربّع أوافق على أنني اطلعت وقبلت بشعار
                الخصوصيّة. إذا كنت قاصراً، فالمطلوب من ذويك أو الوصي عليك
                الإطلاع على إشعار الخصوصيّة الخاص بنا
              </Link>
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
