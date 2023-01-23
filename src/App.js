import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Home from "./pages/Home";

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
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
