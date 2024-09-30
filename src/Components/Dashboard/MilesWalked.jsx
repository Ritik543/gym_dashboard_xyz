import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './MilesWalked.css';

// Register necessary Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const MilesWalked = () => {
    // Data for the chart
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], // Days of the week
        datasets: [
            {
                label: 'Miles Walked',
                data: [3.2, 5.1, 4.5, 6.3, 7.0, 5.8, 6.5], // Sample data points for miles walked
                borderColor: '#FF4500', // Line color (as per the image)
                backgroundColor: 'rgba(255, 69, 0, 0.1)', // Faded background fill below the line
                fill: true, // Fill the area under the line
                borderWidth: 2, // Thickness of the line
                tension: 0.4, // Smooth curve for the line
                pointRadius: 5, // Radius of points on the line
                pointBackgroundColor: '#FFFFFF', // Point background color
                pointBorderColor: '#FF4500', // Point border color
            }
        ]
    };

    // Chart options
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                display: false, // Hide y-axis labels (as per the image)
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
                    display: false, // Hide gridlines
                }
            }
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smooth curve for the line
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
