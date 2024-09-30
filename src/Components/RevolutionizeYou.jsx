import React from 'react';
import './RevolutionizeYou.css';
import { FaCheckCircle } from 'react-icons/fa';

const RevolutionizeYou = () => {
    return (
        <div className="revolutionize-container">
            <div className="header">REVOLUTIONIZE YOU</div>
            <div className="sub-header">LOREM IPSUM</div>
            <div className="features">
                <div className="feature-list">
                    <ul>
                        <li><span>24*7 AI Trainer</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Unlimited Access</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>150+ Exercise</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Customized Plans</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Advanced AI Camera</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Voice Feedback</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Complete Plans</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Real Time Feedback</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Rep Counter</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Saved Workout Videos</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Activity History</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                        <li><span>Voice Commands</span> <div><img src="/src/assets/Group.png" alt="Group" /></div></li>
                    </ul>
                </div>
                <div className="description">
                    <p>To Benefits Of All The Features Of FitSnap, The Ideal Tablet Featuring 8GB RAM And An Immersive 11-Inch Screen Should Offer A Balance Of Performance, Display Quality</p>
                    <a href="#" className="download-button">Download Brochure <FaCheckCircle /></a>
                </div>
            </div>
        </div>
    );
};

export default RevolutionizeYou;
