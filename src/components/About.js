import React from 'react';
import '../styles/About.css';
import image from '../assets/sw.jpg';

const About = () => {
    return (
        <section id="home" className="about">
            <div className="about-image-container">
                <img src={image} alt="Swetha Nethmi" className="image" />
                <div className="text-overlay">
                    <h1 className='myname'>Swetha Nethmi</h1>
                    <h2 className='web'>Web Designer and Developer</h2>
                </div>
            </div>
            <section id='about' className='about'>
            <h2 className='me'>About me</h2>
            <p>Hello! I'm Swetha Nethmi, a Web Designer and Developer passionate about creating stunning, user-friendly websites. I specialize in responsive, aesthetically pleasing web applications and combine a deep understanding of user experience with a keen eye for design. My work is driven by creativity and collaboration, ensuring each project is both functional and beautiful. When I’m not coding, I’m exploring tech trends and sharing insights on social media. Feel free to browse my portfolio and connect with me!</p>
            <button><a href="/cv new.pdf" download className="download-button">
                Download Resume
            </a></button>
            </section>
           
        </section>
    );
};

export default About;
