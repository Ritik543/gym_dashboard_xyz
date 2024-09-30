import React from 'react';
import './Testimonalbox.css';

const Testimonialbox = ({ name, testimonialText }) => {
    return (
        <div className="testimonial">
            <p>{testimonialText}</p>
            <div className="user">
                <img src="src\assets\img.jpg" alt="User" />
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Testimonialbox; 