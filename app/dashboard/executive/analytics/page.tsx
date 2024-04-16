import { options } from '@/app/charts/line_chart'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title } from 'chart.js';

import { features } from 'process';
Chart.register(CategoryScale, LinearScale, BarElement,Title,Legend)

const Analytics = () => {
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
    "Longitude",
    "Number Of Reviews",
    "Latitude",
    "Nights_Ratio",
    "country",
    "Capacity",
    "Instant Bookable_enc",
    "Years in Airbnb",
    "Adj Price",
    "Availability_Percent_365",
    "booked days",
    "room_type",
    "Bathroom",
    "Host Total Listings Count_enc",
    "Host Acceptance Rate_enc",
    "Has Availability_enc",
    "Beds",
    "property_type"
  ],
  datasets: [{
    label: 'Feature Importance Whole Rating',
    data: [
      0.29553714,
      0.24988542,
      0.221681228,
      0.160881307,
      0.030523227,
      0.022338555,
      0.019153122,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
      
    ],
    backgroundColor: 'rgba(00, 00, 00)',
    borderColor: 'rgb(00, 00, 00)',
    borderWidth: 1
  }]
};
  return (
    <div className='flex justify-center items-center'>

      <Bar data={data} options={options}/>
      
    </div>
  )
}

export default Analytics
