import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReactLenis from "lenis/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
