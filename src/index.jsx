import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car_rent_test">
        <App />
      </>
    </Provider>
  </React.StrictMode>
);

//vfkjgifrgjifderjgifdejhgfdjgfjdgkjfgkjfgjf
// basename="/car_rent_test"
