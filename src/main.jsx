import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home/>
    <ToastContainer />
  </StrictMode>,
);
