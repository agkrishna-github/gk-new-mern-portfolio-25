import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
console.log("main.jsx render");
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);