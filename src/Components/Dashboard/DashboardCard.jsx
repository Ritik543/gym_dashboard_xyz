import React from 'react';
import './DashboardCard.css';

const DashboardCards = () => {
    return (
        <div className="dashboard-cards">
            <div className="card">
                <div className="card-icon">🔥</div>
                <div className="card-info">
                    <p>1,930</p>
                    <span>Avg. Calories</span>
                </div>
            </div>
            <div className="card">
                <div className="card-icon">🍗</div>
                <div className="card-info">
                    <p>155</p>
                    <span>Avg. Proteins</span>
                </div>
            </div>
            <div className="card app-card">
                <div className="card-icon">🍎</div>
                <div className="card-info">
                    <p>290</p>
                    <span>Avg. Carbs</span>
                </div>
            </div>
            <div className="card app-card">
                <div className="card-icon">🥑</div>
                <div className="card-info">
                    <p>50</p>
                    <span>Avg. Fats</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;
