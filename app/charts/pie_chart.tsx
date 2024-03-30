import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
    // responsive: true,
    maintainAspectRatio: false,
};

export const data = {
    labels: [
        'black',
        'white',
    ],
    datasets: [
        {
            data: [65, 59],
            borderWidth: 1,
            borderColor: 'rgba(00, 00, 000, 1)',
            backgroundColor: [
                'rgba(00, 00, 000, 1)',
                'rgba(ff, ff, fff, 1)',
            ],
        },
        // Add more datasets here if needed
    ],
};

const PieChart = () => (
    <div style={{ width: '600px', height: '600px' }}>
        <Pie data={data} options={options} />
    </div>
);

export default PieChart;