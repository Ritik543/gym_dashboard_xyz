import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './MilesWalked.css';


Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const MilesWalked = () => {
    
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], 
        datasets: [
            {
                label: 'Miles Walked',
                data: [3.2, 5.1, 4.5, 6.3, 7.0, 5.8, 6.5], 
                borderColor: '#FF4500', 
                backgroundColor: 'rgba(255, 69, 0, 0.1)', 
                fill: true, 
                borderWidth: 2, 
                tension: 0.4, 
                pointRadius: 5, 
                pointBackgroundColor: '#FFFFFF', 
                pointBorderColor: '#FF4500', 
            }
        ]
    };

    // Chart options
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                display: false, 
            },
            x: {
                display: true,
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                },
                grid: {
                    display: false, 
                }
            }
        },
        plugins: {
            legend: {
                display: false, 
            },
        },
        elements: {
            line: {
                tension: 0.4, 
            }
        }
    };

    return (
        <div className="miles-walked">
            <h3>Miles Walked <br />  <span style={{ textAlign: "left" }}>1734</span> </h3>
            <div className="graph">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default MilesWalked;
