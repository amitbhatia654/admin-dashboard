import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FireBaseProvider } from "./context/FireBase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FireBaseProvider>
        <App />
      </FireBaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
