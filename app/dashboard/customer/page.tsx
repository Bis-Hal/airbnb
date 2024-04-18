'use client'

import Filter from "@/app/components/filter";
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title } from 'chart.js';
import { useState } from 'react';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend)
import Status from "../components/status";
import { Bar } from "react-chartjs-2";


const CustomerDashboard = () => {
    const [modelPrice, setModelPrice] = useState('');
    const [modelPriceClass, setModelPriceClass] = useState('');
    const [isClicked, setCliecked] = useState(false);
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
        borderWidth: 0.5
      }]
    };
 

    return (
        <div className='relative w-full h-full flex'>
            <Filter setModelPrice={setModelPrice} setModelPriceClass={setModelPriceClass} />
            <div className="w-32 font-bold flex rounded-xl cursor-pointer items-center justify-center m-10 bg-black text-white h-12 absolute bottom-0 right-0" onClick={()=>{setCliecked(!isClicked)}}>Submit</div>
            <div className='h-full flex w-full p-10 justify-between items-center'>
                <div className='w-[44rem] h-96'>
                    <Bar data={data} options={options} />
                  
                </div>
                <Status isClicked={isClicked} />

            </div>


        </div>

    )
}

export default CustomerDashboard



