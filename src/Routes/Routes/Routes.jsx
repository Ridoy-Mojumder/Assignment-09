import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import UpdateProfile from "../../Components/UpdateProfile/UpdateProfile";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
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
          element: <AboutUs></AboutUs>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        },
        {
          path: "/updateProfile",
          element: <UpdateProfile></UpdateProfile>
        },
      ]
      
    },
  ]);