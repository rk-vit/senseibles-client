import React, { useState,useEffect } from "react";
import { Router, Route,Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/adminLogin";
import AdminRegister from "./pages/adminRegister";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminEvents from "./pages/AdminEvents";
import AddEventForm from "./components/AddEventForm";
import EventDetails from "./components/EventDetails";
import Check from "./pages/check";
function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/secret-admLog" element={<AdminLogin/>}/>
        <Route path="/secret-admReg" element={<AdminRegister/>}/>
        <Route path="/secret-admHome" element={<ProtectedRoute><AdminHome/></ProtectedRoute>}/>
        <Route path="/secret-admEve" element={<ProtectedRoute><AdminEvents/></ProtectedRoute>}/>
        <Route path="/AddEvents" element={<ProtectedRoute><AddEventForm/></ProtectedRoute>}/>
        <Route path="/event/:event_id" element={<ProtectedRoute><EventDetails/></ProtectedRoute>}/>


    </Routes>
    </div>
  );
}

export default App;
