import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title } from 'chart.js';

import { features } from 'process';
Chart.register(CategoryScale, LinearScale, BarElement,Title,Legend)

const MCDM = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
    },
  };




const data = {
  labels: [
    "room_type",
    "property_type",
    "country",
    "Instant Bookable_enc",
    "Adj_price",
    "Amenity"
    
  ],
  datasets: [{
    label: 'Feature Importance Price Pred Cust',
    data: [
      0.15,
      0.1,
      0.25,
      0.01,
      0.3,
      0.2
    ],
    backgroundColor: 'rgba(00, 00, 00)',
    borderColor: 'rgb(00, 00, 00)',
    borderWidth: 1
  }]
};
  return (
    <div className='flex h-full w-[55%] justify-center items-center'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default MCDM
