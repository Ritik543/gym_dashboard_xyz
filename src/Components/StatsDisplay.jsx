// StatsDisplay.js
import React from 'react';
import './StatsDisplay.css';
import abc from "../assets/social-media.gif";
import abc2 from "../assets/hourglass.gif";
import abc3 from "../assets/stopwatch.gif";
const StatsDisplay = () => {
    return (
        <div className="stats-container">
            <div className="stat-item">
                <div className='box'>
                    <img src={abc} alt="GYM Enrolled" width={50} height={50} />

                    <h2 className="stat-number">50+</h2>
                </div>
                <p>GYM Enrolled</p>
            </div>
            <div className="stat-item">
                <div className="box">
                    <img src={abc2} alt="GYM Enroll" width={50} height={50} />
                    <h2 className="stat-number">250+</h2>
                </div>
                <p>Users Enrolled</p>
            </div>
            <div className="stat-item">
                <div className="box">
                    <img src={abc3} alt="GYM Enroll" width={50} height={50} />
                    <h2 className="stat-number">60+</h2>
                </div>
                <p>Workout Sessions</p>
            </div>
        </div>
    );
};

export default StatsDisplay;
