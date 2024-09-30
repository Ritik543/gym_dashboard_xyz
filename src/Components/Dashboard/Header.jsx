import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <button className="menu-btn">☰ Hide Menu</button>
            <Link to="/">
                <button className="home-btn">Home</button>
            </Link>
            <div className="search-container">
                <FaSearch size={20} color='grey' className="search-icon" />
                <input
                    type="text"
                    placeholder="Search client by name"
                    className="search-bar"
                />
            </div>
        </div>
    );
};

export default Header;