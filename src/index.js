import React from 'react';
import ReactDOM from 'react-dom/client';
import Stay from './views/Stay/Stay';
import Flight from './views/Flight/Flight';
<<<<<<< HEAD
import Register from './views/Register/Register';s
import Login from './views/Flight/Login/Login';
=======
import Login from './views/Login/Login';
import RegistrationForm from "./views/Register/Register";
>>>>>>> 516e1918f129931bc075b8db59a9e10cc5e02a23
import CarRental from "./views/Car-Rental/CarRental";
import Attractions from './views/Attractions/Attractions';
import Hotel from "./views/Hotel/Hotel";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


<<<<<<< HEAD

const router = createBrowserRouter([{
        path: "/",
        element: < Stay / > ,
=======
const router = createBrowserRouter([
    {
      path: "/",
      element: <Stay/>,
>>>>>>> 516e1918f129931bc075b8db59a9e10cc5e02a23
    },
    {
        path: "/flight",
        element: < Flight / > ,
    },
   {
  path:"/attraction",
  element:<Attractions/>
   },
    {
<<<<<<< HEAD
        path: "/CarRental",
        element: < CarRental / > ,
    },
    {
        path: "/login",
        element: < Login / >
    },
    {
        path: "Register",
        element: < Register / >
    }
])
=======
      path:"/login",
      element:<Login/>
    },
    {
      path:"/CarRental",
      element:<CarRental/>
    },
>>>>>>> 516e1918f129931bc075b8db59a9e10cc5e02a23

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
root.render( <
    RouterProvider router = { router }
    />
);