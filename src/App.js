import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./views/auth/Login";
import Report from "./views/home/Report";
import Home from "./views/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
