import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { useThemeStore } from "./store/themeStore";

function RootWithTheme() {
  const dark = useThemeStore((state) => state.dark);
  const appliedTheme = dark ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(<RootWithTheme />);
