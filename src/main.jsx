import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import logo from "./assets/logo.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 style= {{ textAlign: "center", width: "30%" , margin: "auto" }}>
      <img src={logo} alt="Logo" style={{ width: "100%"}} />
    </h1>
    <App />
  </StrictMode>
);
