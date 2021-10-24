import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./fonts/font-style.css";
import AuthProvider from "./context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
