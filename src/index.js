import React from 'react';
import ReactDOM from 'react-dom/client';
import Stay from './views/Stay/Stay';
import Flight from './views/Flight/Flight';
import Login from './views/Login/Login';
import RegistrationForm from "./views/Register/Register";
import CarRental from "./views/Car-Rental/CarRental";
import Attractions from './views/Attractions/Attractions';
import Hotel from "./views/Hotel/Hotel";
import Attractions from './views/Attractions/Attractions';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Stay/>,
    },
    {
      path: "/flight",
      element: <Flight/>,
    },
   {
  path:"/attraction",
  element:<Attractions/>
   },
    {
      path:"/login",
      element:<Login/>
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
root.render(
  <RouterProvider router={router}/>
);

