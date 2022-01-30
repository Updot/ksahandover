import React, { useContext, useState } from "react";

const LangContext = React.createContext();
const LangUpdateContext = React.createContext();

export function useLangContext() {
  return useContext(LangContext);
}
export function useLangUpdateContext() {
  return useContext(LangUpdateContext);
}

function LanguageContext({ children }) {
  const [lang, setLang] = useState("Arabic");

  const updateLang = (value) => {
    setLang(value);
  };

  return (
    <LangContext.Provider value={lang}>
      <LangUpdateContext.Provider value={updateLang}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
}

export default LanguageContext;
