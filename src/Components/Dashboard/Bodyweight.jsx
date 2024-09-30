import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BodyWeightChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
            {
                label: 'Weight (kg)',
                data: [69.5, 69.8, 70, 69.9, 69.6, 69.7, 69.8, 70.1, 69.9, 69.8],
                backgroundColor: '#FFA500',
                borderRadius: 5,
                barThickness: 15,
            },
            {
                label: 'Goal (kg)',
                data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
                backgroundColor: '#FFD700',
                borderRadius: 5,
                barThickness: 15,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                min: 69,
                max: 71,
                ticks: {
                    stepSize: 0.5,
                    color: '#808080',
                },
                grid: {
                    color: '#e0e0e0',
                },
            },
            x: {
                ticks: {
                    color: '#808080',
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333333',
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BodyWeightChart;