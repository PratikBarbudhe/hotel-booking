import React from 'react';
import ReactDOM from 'react-dom/client';
import Stay from './views/Stay/Stay';
import Register from './views/Register/Register';
import Login from './views/Login/Login'
import RegistrationForm from "./views/Register/Register";
import CarRental from "./views/Car-Rental/CarRental";
import Attractions from './views/Attractions/Attractions';
import Hotel from "./views/Hotel/Hotel";
import Footer from "./component/Footer/Footer"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './views/About/About'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Stay/>,
    },
    {
        path: "/about",
        element: <About/> ,
    },
   {
     path:"/attraction",
     element:<Attractions/>
   },
    {
        path: "/CarRental",
        element: < CarRental/> ,
    },
    {
        path: "/login",
        element: < Login/>
    },
    {
        path: "Register",
        element: <Register/>
    },
    {
      path:"Register",
      element:<RegistrationForm/>
    },
    {
      path:"/hotel",
      element:<Hotel/>
    },
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <>
  < RouterProvider router = { router }
    />
    <Footer/>
    </>
);