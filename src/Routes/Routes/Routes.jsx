import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import UpdateProfile from "../../Components/UpdateProfile/UpdateProfile";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EstateDetails from "../../Components/EstateDetails/EstateDetails";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Location from "../../Components/OurLocation/Location";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/signIn",
          element: <SignIn></SignIn>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/aboutUs",
          element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
        },
        {
          path: "/contactUs",
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
        },
        {
          path: "/estate/:id",
          element: <EstateDetails></EstateDetails>,
          loader: () => fetch('../Estate.json') 
        },
        {
          path: "/updateProfile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: '/location',
          element: <Location></Location>
        }
      ]
      
    },
  ]);