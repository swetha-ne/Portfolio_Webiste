import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h4>GET IN TOUCH</h4>
                    <p>
                        <i className="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp; swethane28@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> &nbsp;&nbsp;+94 70 262 8162
                    </p>
                </div>
                
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/swetha-nethmi-77bb74279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-icon" target='blank'><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/itsjustt.swetha?igsh=MWdrM2xnMzV2azZlag%3D%3D&utm_source=qr" className="social-icon" target='blank'><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100090886395344&mibextid=LQQJ4d" className="social-icon" target='blank'><i className="fab fa-facebook"></i></a>
                </div>
            </div>
            <div className="footer-copy">
                <p>Copyright &copy;2024 SN</p>
            </div>
        </footer>
    );
};

export default Footer;