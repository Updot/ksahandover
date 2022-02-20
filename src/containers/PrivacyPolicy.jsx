import React from "react";
import { useLangContext } from "../contexts/LanguageContext";
import EnglishPrivacyPolicy from "../components/EnglishPrivacyPolicy";
import ArabicPrivacyPolicy from "../components/ArabicPrivacyPolicy";

function PrivacyPolicy() {
  const lang = useLangContext();

  return (
    <>
      {lang === "English" ? <EnglishPrivacyPolicy /> : <ArabicPrivacyPolicy />}
    </>
  );
}

export default PrivacyPolicy;
