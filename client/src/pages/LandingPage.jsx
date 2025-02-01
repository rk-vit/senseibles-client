import React, { useState,useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import WelcomeText from "./WelcomeText";
import AboutUs from "./aboutus";
const LandingPage = ()=>{
    const[Message,setMessage] = useState("");
    const fetchMessage = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/");
            setMessage(response.data.text);
        }catch(err){
            console.log("Fetching error");
        }
    }
    /*useEffect(()=>{
        fetchMessage();
    },[]);*/
    return (
     <div>
        <Header/>
        <WelcomeText/>
        <AboutUs/>
     </div>   
    )
}
export default LandingPage;