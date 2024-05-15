import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="container">
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>Hi I'm JOE</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sapien commodo, vestibulum turpis nec, feugiat orci. Integer nec velit at purus pretium tristique. Nullam hendrerit, lorem eget mattis placerat, nunc arcu porta magna, sit amet ultricies mauris sem id mi.
                    </p>
                    <p>
                        Ut malesuada, turpis a consequat ultrices, ipsum arcu maximus sapien, vitae dignissim magna dolor vel lectus. Phasellus sed sapien ac nulla facilisis aliquam. Cras nec lacinia orci. Vestibulum dapibus vestibulum eros, vel vehicula lorem vehicula nec. Nullam posuere aliquam est vitae elementum.
                    </p>
                </div>
                <div className="about-photo">
                    {/* Placeholder for your photo */}
                    <img src="https://tse3.mm.bing.net/th/id/OIG1.TBdU0Wh.8wIXU6nKFwy6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Your Name" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;
