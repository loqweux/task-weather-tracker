import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(
    () => JSON.parse(localStorage.getItem("dark")) || false
  );
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
