import React, { useState } from "react";
import "./page-css/AdminHome.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    alert("Signing out...");
    // Add your signout logic here
  };

  const eventsClick = ()=>{
    navigate("/secret-admEve");
  }
  return (
    <div className="admin-home">
      {/* Header Section */}
      <header className="header">
        <h1>Admin Dashboard</h1>

        <div className="profile-container">
          <button className="profile-button" onClick={toggleDropdown}>
            Profile
          </button>

          {showDropdown && (
            <div className="dropdown">
              <button className="dropdown-item" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Section */}
      <main className="main">
        <button className="main-button" onClick={eventsClick}>Events</button>
        <button className="main-button">Blogs</button>
      </main>
    </div>
  );
};

export default AdminHome;
