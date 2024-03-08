import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";
  import React from "react";
  import Report from "../views/home/Report";
  import Home from "../views/home/Home";
  import Config from "../views/home/Config"
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  const privaterouter = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/report/:id",
      element: <Report/>,
    },
    {
      path: "/config",
      element: <Config/>,
    },
    {
      path: "*",
      element: <Navigate to='/home' replace />
    }
  ]);

  export default privaterouter;