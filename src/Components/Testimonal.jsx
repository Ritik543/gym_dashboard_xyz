import React from 'react';
import Testimonialbox from './Testimonalbox';
// import Testimonial from './Testimonial';
import './Testimonal.css';

function Testimonal() {
    const testimonialsData = [
        {
            name: 'Riya Awasthi',
            testimonialText: 'I LOVE the FitSnap. to train my daily exercise, it offers a wide range of categories that fit my needs.',
        },
        {
            name: 'Riya Awasthi',
            testimonialText: 'I LOVE the FitSnap. to train my daily exercise, it offers a wide range of categories that fit my needs.',
        },
        {
            name: 'Riya Awasthi',
            testimonialText: 'I LOVE the FitSnap. to train my daily exercise, it offers a wide range of categories that fit my needs.',
        },
        // Add more testimonials here
    ];

    return (
        <div className="container-3">
            <h1>WHAT OUR CLIENTS SAY <br /> ABOUT US</h1>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div className='testimonial-box'>
                        <Testimonialbox key={index} {...testimonial} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonal;