import React from "react";
import { useLangContext } from "../contexts/LanguageContext";

import logo from "../images/logo2.png";
import titleArabic from "../images/titleArabic.png";

function Landing() {
  const lang = useLangContext();

  return (
    <div className="landing-component">
      <div className="text-container">
        <div className="part1">
          <h1 className="page-title">Tiara dream</h1>
          {lang === "English" ? (
            <h2 className="page-subtitle">
              Immersive experience around the Tiara
            </h2>
          ) : (
            <img className="arabic-title" src={titleArabic} alt="حلم التاج" />
          )}
        </div>
        {lang === "English" ? (
          <div className="part2">
            <p className="date">16 - 26 March 2022</p>
            <p className="place">King Fahad national library, Riyadh</p>
          </div>
        ) : (
          <div className="part2 arabic">
            <p className="date">١٦ - ٢٦ مارس ٢٠٢٢</p>
            <p className="place">
              تجربة غامرة لاكتشاف عالم التيجان الفاخرة
              <br />
              مكتبة الملك فهد الوطنية، الرياض
            </p>
          </div>
        )}
        <img src={logo} alt="Chaumet" />
      </div>
      <p className="hashtag">#Tiaradream</p>
    </div>
  );
}

export default Landing;
