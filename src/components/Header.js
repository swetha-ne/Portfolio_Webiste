import React from 'react';
import '../styles/Header.css';

// Importing social media icons
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// Logo image import
import logo from '../assets/logo.png'; // Ensure you have this image in the assets folder

const Header = () => (
    <header>
        <div className="header-container">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
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
