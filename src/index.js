import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "./RouteSwitch";

import MarketProvider from "./context/MarketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MarketProvider>
    <React.StrictMode>
      <RouteSwitch />
    </React.StrictMode>
  </MarketProvider>
);
