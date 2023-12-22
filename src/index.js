import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./assets/fonts/BrunoAce-Regular.ttf";
import "./assets/fonts/ShareTech-Regular.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "", element: <App /> }]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
