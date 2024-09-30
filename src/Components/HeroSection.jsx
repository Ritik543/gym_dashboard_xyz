import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">


                <div className="hero-container">
                    <video autoPlay loop muted>
                        <source src="/-0c44-4d47-b5de-24240b06f535.mp4" type="video/mp4" />
                    </video>




                    <div className="hero-content">
                        <h1>Fitsnap for GYM</h1>
                        <p>
                            Welcome to the next generation of fitness! At FitSnap, we are thrilled
                            to introduce the power of Artificial Intelligence (AI) to
                            revolutionize your gym experience.
                        </p>
                    </div>

                </div>
                <svg className="svg-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,240C672,235,768,181,864,160C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </>
    );
};

export default HeroSection;
