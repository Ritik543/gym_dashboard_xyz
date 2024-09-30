import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="src/assets/img2.png" alt="logo" className="logo-4" />
            </div>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <li className="h">Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li className="dash">
                    <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                </li>
                <li className="contact-us">Contact Us</li>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
