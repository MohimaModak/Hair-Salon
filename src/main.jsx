import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Service from "./assets/Component/Service/Service";
import Problem from "./assets/Component/Problem/Problem";
import Style from "./assets/Component/Style/Style";
import Testimonals from "./assets/Component/Testimonals/Testimonals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Service",
        element: <Service></Service>,
      },
      {
        path: "/Problem",
        element: <Problem></Problem>,
      },
      {
        path: "/Style",
        element: <Style></Style>,
      },
      {
        path: "/Testimonals",
        element: <Testimonals></Testimonals>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
