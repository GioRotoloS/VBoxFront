import {
  RouterProvider,
} from "react-router-dom";
import React, { useContext, useState } from 'react';
import router  from "./utils/routes";
import privaterouter from "./utils/privateRoutes";
import { AuthContext } from "./utils/authContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className="app">
      <div>
      {currentUser?(
        <RouterProvider router={privaterouter}/>
      ) : (
        <RouterProvider router={router}/>
      )}
      </div>
    </div>
  );
}

export default App;
