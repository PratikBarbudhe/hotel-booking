import React from 'react';
import ReactDOM from 'react-dom/client';
import Stay from './views/Stay/Stay';
import Flight from './views/Flight/Flight';
import Login from './views/Flight/Login/Login';
import Register from "./views/Register/Register";
import CarRental from "./views/Car-Rental/CarRental";
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
      path: "/CarRental",
      element: <CarRental/>,
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"Register",
        element:<Register/>
    }
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

