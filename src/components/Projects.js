import React from 'react';
import '../styles/Project.css'

const Projects = () => {
    const skills = [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 80 },
        { name: 'Canva', level: 95 },
        { name: 'Figma', level: 90 },
        
    ];

    return (
        <section id='projects'>
<div className="skills-wrapper">
            <div className="skills">
                <h2>Skills</h2>
                <p className="skills-description">
                 I excel in crafting responsive web designs and developing dynamic applications using modern technologies. My expertise includes HTML, CSS, JavaScript, and React for building intuitive user interfaces. I’m also proficient in UI/UX design, ensuring seamless and engaging user experiences. My skills extend to problem-solving and optimizing performance for high-quality, efficient web solutions.
                </p>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                            <div className="skill-percentage" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        <span className="skill-percentage-text">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </div>
        </section>
        
    );
};
export default Projects;
