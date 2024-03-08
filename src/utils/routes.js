import {
    createBrowserRouter, 
    Navigate
  } from "react-router-dom";
  import Login from "../views/auth/Login";
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "*",
        element: <Navigate to='/' replace />
    }
  ]);

  export default router;