import React from "react";
import "./Europe.css";
import Navbar from "../../component/Navbar/Navbar"
import Cards from "../../component/Cards/Cards";
import London from "./London.webp";

export default function Europe(){
    <>

    <Navbar/>

    <Cards img={London} name="London " info=" 40 things to do"/>
    </>
}