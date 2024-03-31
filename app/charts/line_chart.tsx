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
    },
  },
};

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  datasets: [
    {
      label: "Thailand",
      tension: 0.4,
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    // {
    //   label: "England",
    //   tension: 0.4,
    //   data: [70, 20, 40, 21, 76, 65, 70],
    //   borderColor: 'rgb(255, 0, 0,1)',
    //   backgroundColor: '',
    // },
    // {
    //   label: "USA",
    //   tension: 0.4,
    //   data: [10, 20, 30, 25, 36, 35, 40],
    //   borderColor: 'rgb(0, 255, 0,1)',
    //   backgroundColor: '',
    // },
    // {
    //   label: "Spain",
    //   tension: 0.4,
    //   data: [100, 90, 95, 100, 96, 55, 90],
    //   borderColor: 'rgb(0, 0, 255,1)',
    //   backgroundColor: '',
    // },
  
  ],
};

const LineChart = () => (
  <Line data={data}/>
);

export default LineChart;