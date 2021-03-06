import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LanguageContext from "./contexts/LanguageContext";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import Map from "./containers/Map";
import Header from "./components/Header";
import PrivacyPolicy from "./containers/PrivacyPolicy";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#06185f",
        dark: "#06185f",
        darker: "#06185f",
      },
      orange: {
        main: "#F3C8A6",
      },
      grey: {
        light: "#FAFAFA",
        main: "#D4D4D4",
        dark: "#858586",
      },
    },
    typography: {
      fontFamily: "Agaramond, serif",
    },
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
            }
          />
          <Route path="/map" element={<Map />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </LanguageContext>
    </ThemeProvider>
  );
}

export default App;
