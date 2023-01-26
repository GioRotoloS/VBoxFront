import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./views/Login";
import Report from "./views/Report";
import Home from "./views/Home";
import "./style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/report",
    element: <Report/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
