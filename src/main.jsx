import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const defaultTheme = createTheme()
const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mdlarge: 1440
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
