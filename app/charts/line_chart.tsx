import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { splineCurve } from 'chart.js/helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sample Line Chart',
    },
  },
};

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      tension: 0.4,
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    // Add more datasets here if needed
  ],
};

const LineChart = () => (
  <Line data={data}/>
);

export default LineChart;