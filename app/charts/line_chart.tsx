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
import { color, splineCurve } from 'chart.js/helpers';

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
      display:true,
      // position: "bottom",
      // align: 'end',
      // fill:true,
      // useBorderRadius: true,
      // borderRadius: 150,
      // fillStyle: 'rgb(255, 25, 25,1)',


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
      label: "Normal",
      tension: 0.4,
      data: [6, 5, 8, 1, 5, 5, 4],
      borderColor: 'rgb(255, 25, 25)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      fill: true,
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75,192,192,1)'
    },
    {
      label: "Festival",
      tension: 0.4,
      data: [1, 5, 6, 3, 1, 4, 6],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    {
      label: "New Year",
      tension: 0.4,
      data: [10, 11, 6, 3, 1, 6, 3],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },

  ],
};

const LineChart = ({ }) => (
  <Line data={data} options={options} />
);

export default LineChart;