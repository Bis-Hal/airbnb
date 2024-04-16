import VerticalNavBar from '@/app/components/vertical_nav_bar'
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title } from 'chart.js';

import { features } from 'process';
Chart.register(CategoryScale, LinearScale, BarElement,Title,Legend)


const BI = () => {
  const [features, setFeatures] = useState([{}]);

  //   const getData = async () => {
  //     try {
  //         const getResponse = await fetch('/api/', {
  //             method: 'GET',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //         });

  //         if (!getResponse.ok) {
  //             throw new Error('Network response was not ok');
  //         }

  //         const data = await getResponse.json();
  //         const features : [{label : string ,stats : number}] = data.map((item: {label : string ,stats : number}) => ({
  //             label: item.label,
  //             stats: item.stats
  //         }));
  //         setFeatures(features);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  // };

  //   getData()

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

      "Has Availability_enc",
      "Capacity",
      "room_type",
      "Latitude",
      "property_type",
      "country",
      "Bathroom",
      "Longitude",
      "Availability_Percent_365",
      "booked days",
      "Host Acceptance Rate_enc" <
      "Beds",
      "Number Of Reviews",
      "Nights_Ratio",
      "Host Total Listings Count_enc",
      "Instant Bookable_enc",
      "Years in Airbnb",
      "Rating_Group_enc"
    ],
    datasets: [{
      label: 'Feature Importance',
      data: [
        0.357170463,
        0.181380303,
        0.126058511,
        0.09537942,
        0.068140728,
        0.066174178,
        0.061794593,
        0.018060495,
        0.012459479,
        0.009525423,
        0.002879826,
        0.000436562,
        0.000353135,
        0.000186886,
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
    <div className='flex w-full justify-center items-center'>
      {/* <div className='w-auto h-auto'> */}
        <Bar data={data} options={options} />

{/* /      </div> */}
      {/* <iframe title="airbnb_ver20240415" src="https://app.powerbi.com/reportEmbed?reportId=64a1e1d8-5a13-4406-93bc-3f652a54f72c&autoAuth=true&ctid=99eeb009-e7a2-47b6-9ded-028cdcc300e6"></iframe> */}
    </div>
  )
}

export default BI
