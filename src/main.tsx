import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Chart from "./pages/Chart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Chart />
  </React.StrictMode>
);
