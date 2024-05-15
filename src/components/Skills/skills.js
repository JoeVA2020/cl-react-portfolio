import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="skills-list">
                <div className="skill">
                <button id="btn">React</button>
                </div>
                <div className="skill">
                <button id="btn">HTML</button>
                </div>
                <div className="skill">
                <button id="btn">CSS</button>
                </div>
                <div className="skill">
                <button id="btn">JavaScript</button>
                </div>
                <div className="skill">
                <button id="btn">C Programming</button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
