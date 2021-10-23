import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./fonts/font-style.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
