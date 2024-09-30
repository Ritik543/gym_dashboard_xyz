import React from 'react'
import './Things.css'

const Things = () => {
    return (
        <div className="container-5">
            <div className="centered-text">
                <h1>Things You Need </h1>
            </div>
            <div className="image-container-2">
                <div className="text-container-2">
                    <h1>Headphone</h1>
                    <div className="line"></div>
                </div>
                <div className="text-container-3">
                    <h1>A Tab with FitSnap</h1>
                    <div className="line"></div>
                </div>
                <div className="text-container-4">
                    <h1>Fitness band</h1>
                    <div className="line"></div>
                </div>
                <img src="\src\assets\gym.jpg" alt="Description" />
            </div>
        </div>
    )
}

export default Things