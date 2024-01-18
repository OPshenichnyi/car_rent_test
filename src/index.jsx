import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/app-return-pack">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename = "/app-return-pack"
