import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Contract from "../Pages/Contract/Contract";
import LogIn from "../Pages/LogIn/LogIn";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  },
  {
    path: "/contract",
    element: <Contract></Contract>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },

]);