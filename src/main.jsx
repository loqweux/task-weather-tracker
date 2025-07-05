// main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { useTheme } from "./context/ThemeContext";

function RootWithTheme() {
  const { dark } = useTheme();
  const appliedTheme = dark ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline /> {/* вот это сбрасывает margin на body */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RootWithTheme />
  </ThemeProvider>
);
