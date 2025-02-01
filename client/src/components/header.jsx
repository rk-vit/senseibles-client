import React, { useState } from "react";
import './comp-css/Header.css';
import Button from "./button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header">
      <div className="logo">
        <h2><b>SENSE</b></h2>
        <h2>ibles</h2>
      </div>
      <div className="header-right">
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Admin</a>
        </nav>
        <Button text="Events" />
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default Header;
