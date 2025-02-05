import { useState, useEffect } from "react";
import "./comp-css/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} style={{ padding: 0 }}>
      <div className="header-content">
        <div className="logo">Senseibles</div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "mobile-menu-open" : ""}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#departments" onClick={() => setMenuOpen(false)}>Departments</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
