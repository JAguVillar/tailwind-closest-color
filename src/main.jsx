import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex-grow container mx-auto px-4 py-8">
      <App />
    </div>
  </StrictMode>
);
