import React from "react";
import ReactDOM from 'react-dom/client';
import "./Attractions.css"
import kolkata from "./kolkata.jpg"
import Navbar from "../../component/Navbar/Navbar";
import Cards from "../../component/Cards/Cards";
import Agra from "./agra.jpg";
import Oldgao from "./old gao.jpg";
import London from "./London.webp";
import Paris from "./paris.jpg";
import Srilanka from "./srilanka.jpg";
import Korea from "./korea.webp";
import Singapore from "./singapur.jpg";
import Europe from "./Europe";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AttractionNavbar from "../../component/AttractionNavabar/AttractionNavbar";

/*const router = createBrowserRouter([
    {
      path: "/europe",
      element: <Europe/>,
    },
    {
        path: "/northamerica",
        element: < NorthAmerica/> ,
    },
   {
     path:"/asia",
     element:<Asia/>
   },
    {
        path: "/africa",
        element: < Africa/> ,
    },
    {
        path: "/southafrica",
        element: <SouthAmerica />
    },
    {
        path: "centralamerica",
        element: <CentralAmerica/>
    }
    
  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <>
  < RouterProvider router = { router }
    />
   
    </>
);*/

export default function Attractions() {
    return (
        <>
            <div className="title-container">
                <Navbar />

                <p className="attractions-title"><b>Attractions, activities and <br />experiences</b></p>
                <p className="attractions-subtitle"> Discover new attractions and experiences to match your<br /> interests and travel style</p>
                <div className="place-container">
                    <input type="text" placeholder="Where are you going" className="place-search" />

                    <input type="date" placeholder="Select yours date" className="place-date" />
                </div>
            </div>
            <h1 className="heading1">Nearby Destinations🌍</h1>
            <div className="main-card-container">
                <Cards img={kolkata} name="kolkata" info="15 things to do" />
                <Cards img={Agra} name="Agra" info="20 Things To Do " />
                <Cards img={Oldgao} name="Old Gao" info="30 things to do" />
                <Cards img={London} name="London" info="25 things to do" />
                <Cards img={Paris} name="Paris" info="40 things to do" />
                <Cards img={Srilanka} name="Srilanka" info="51 things to do " />
                <Cards img={Korea} name="Korea" info="23 things to do" />
                <Cards img={Singapore} name="Singapore" info="40 things to do" />

              
            </div>
            

            
        </>
    )

}

