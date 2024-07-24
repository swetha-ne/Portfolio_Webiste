import React from 'react';
import '../styles/Header.css';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logopp.png'; 

const Header = () => (
    <header>
        <div className="header-container">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">SKILLS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/swetha-nethmi-77bb74279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/itsjustt.swetha?igsh=MWdrM2xnMzV2azZlag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090886395344&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
