import React from 'react';
import ReactDOM from 'react-dom/client';
import Stay from './views/Stay/Stay';
import Flight from './views/Flight/Flight';
import Login from './views/Login/Login';
import Register from "./views/Register/Register"
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
    <RouterProvider router={router} />

)