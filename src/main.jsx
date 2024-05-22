import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LanguageContextProvider } from "./context/LanguageContext";

import "./i18n";
import LanguageSelect from "./LanguageSelect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <LanguageSelect/>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
);