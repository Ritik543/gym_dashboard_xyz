import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">FITSNAP</a>
                <nav>
                    <ul>
                        <li><a href="/">Lorem ipsum</a></li>

                    </ul>
                </nav>
                <a href="/contact" className="contact-btn">Contact Us</a>
            </div>
        </header>
    );
};

export default Header;