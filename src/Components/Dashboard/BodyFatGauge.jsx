import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './BodyFatGauge.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const BodyFatGauge = () => {
    const data = {
        datasets: [
            {
                data: [12, 88],
                backgroundColor: ['#ff6b6b', '#f0f0f0'],
                borderWidth: 0,
                cutout: '75%',
                rotation: 270,
                circumference: 180,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div className="body-fat-gauge">
            <h3>Body Fat</h3>
            <div className="gauge">
                <Doughnut data={data} options={options} />
                <div className="gauge-label">
                    <span>12%</span>
                    <p>Legs Fat</p>
                </div>
            </div>
        </div>
    );
};

export default BodyFatGauge;