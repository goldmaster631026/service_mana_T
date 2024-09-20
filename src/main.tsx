import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import type { } from "@mui/x-date-pickers/themeAugmentation";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </LocalizationProvider>
);
