import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./comp-css/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} bg-black text-white py-4 px-6 shadow-md fixed w-full top-0`}>
      <div className="flex justify-between items-center">
        <button 
          className="text-3xl font-bold cursor-pointer hover:text-gray-400 transition"
          onClick={() => navigate("/")}
        >
          Senseibles
        </button>
        <nav className="flex gap-4">
          <button 
            className="hover:text-gray-400 transition"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button 
            className="hover:text-gray-400 transition"
            onClick={() => navigate("#about")}
          >
            About
          </button>
          <button 
            className="hover:text-gray-400 transition"
            onClick={() => navigate("#departments")}
          >
            Departments
          </button>
          <button 
            className="hover:text-gray-400 transition"
            onClick={() => navigate("#events")}
          >
            Events
          </button>
          <button 
            className="hover:text-gray-400 transition"
            onClick={() => navigate("#blog")}
          >
            Blog
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

