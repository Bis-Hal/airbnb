import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
    cutout: '70%'
};

export const data = {
    datasets: [
        {
            data: [65, 59],
            backgroundColor: [
                'rgba(120, 120, 120, 0.1)',
                'rgba(255, 255, 255, 1)',
            ],
        },
    ],
};

const DonutChart = () => (
    <div className='w-28 h-full flex items-center'>
        <Doughnut data={data} options={options} />
    </div>
);

export default DonutChart;