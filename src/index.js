import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextComp from "./context/app-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextComp>
      <App />
    </AppContextComp>
  </React.StrictMode>
);
