import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/car_rent_test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename="/car_rent_test"
