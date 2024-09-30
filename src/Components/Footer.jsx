import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="container-4">
            <div className="left">
                <img src="src\assets\img2.png" alt="FitSnap logo" className="logo-4" />
                <h1>Get FitSnap</h1>
                <p>Be the first to test the first AI personal trainer, ever! Keep up to date with the launch, new workouts and further details by joining our mailing list.</p>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
            <div className="right">
                <div className="column">
                    <div className='download'>
                        <h2>Download the app</h2>
                        <p>Android - Google Play Store</p>
                        <p>iOS - Apple App Store</p>
                    </div>
                    <div className='contact'>
                        <h2>Contact</h2>
                        <p>Etiam consequat sem ullamcorper, euismodmetus sit</p>
                        <p>+91 0000000000</p>
                    </div>
                </div>
                <div className='company'>
                    <h2>Company</h2>
                    <p>About us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Community Guidelines</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;