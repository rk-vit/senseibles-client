import React, { useState,useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import WelcomeText from "./WelcomeText";
import AboutUs from "./aboutus";
const LandingPage = ()=>{
    const[Message,setMessage] = useState("");
    return (
     <div>
        <Header/>
        <WelcomeText/>
        <AboutUs/>
     </div>   
    )
}
export default LandingPage;