import React from 'react';
import './Elipses.css';
import { AiFillYoutube } from 'react-icons/ai';

const Elipses = () => {
    return (
        <div className="card-container">
            <div className="text-content">
                <h1>LOREM IPSUM DOLOR SIT AMET,</h1>
            </div>
            <div className="video-card">
                <iframe
                    width="360"
                    height="202"
                    src="https://www.youtube.com/embed/xqvCmoLULNY?si=rzE0WlFpgw7lR9jQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="video-details">
                    <p className="video-title">Exercise Tutorial - Squat</p>
                    <div className="video-source">
                        <AiFillYoutube className="youtube-icon" />
                        <p>YouTube</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elipses;
