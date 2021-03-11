import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../context/ThemeContext";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context Api theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default HeroSection;
