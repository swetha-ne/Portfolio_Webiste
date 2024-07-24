import React from 'react';
import '../styles/Header.css';

// Importing social media icons
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// Logo image import
import logo from '../assets/logopp.png'; // Ensure you have this image in the assets folder

const Header = () => (
    <header>
        <div className="header-container">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
