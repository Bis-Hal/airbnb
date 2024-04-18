import React, { use, useEffect, useState } from 'react'
import Dropdown from '../../customer/component/dropdown'
import LineChart from '@/app/charts/line_chart';
import Status from '../../components/status';
import { Bar,  } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title, Legend, Chart } from 'chart.js';
import { listOfCountriesMock, propertyTypes, room_types } from '@/app/utils/airBnbConstants';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend)

const Prediction = () => {
  const[_rating, setRating] = useState('');
  const[_price, setPrice] = useState('');
  const[modelData,setModelData] = useState('')
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

  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = new URL('http://127.0.01:3000/');
            url.searchParams.append('rating', _rating);
          
        
            const response = await fetch(url,{

                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                   
                },
                mode:'no-cors' 
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setModelData(data);
        } catch (error) {
            console.log('error' + error)
        }
    };
    fetchData();
}, [_rating]);
  
  return (
    <div className='w-[75%] h-full p-10 relative'>
      <div className="w-32 font-bold flex rounded-xl cursor-pointer items-center justify-center mr-16 bg-black text-white h-12 absolute top-96 right-0" onClick={()=>{setCliecked(!isClicked)}}>Submit</div>

      <div className='flex flex-wrap p-2 justify-between items-stretch w-full h-44'>
        <div className='w-56'>
          <Dropdown placeholder='Rating' items={['1', '1.5', '2', '2.5', '3', '3.5','4','4.5','5']} handleChange={setRating} />
        </div>
        <div className='w-56'>
          <Dropdown placeholder='Instant Bookable' items={['Yes', 'No']} handleChange={setRating} />
        </div>
        <div className='w-56'>
          <Dropdown placeholder='Room Type' items={room_types} handleChange={setPrice} />
        </div>
        <div className='w-56'>
          <Dropdown placeholder='Country' items={listOfCountriesMock} handleChange={setPrice} />
        </div>
        <div className='w-56'>
          <Dropdown placeholder='Property Type' items={propertyTypes} handleChange={setPrice} />
        </div>
      </div>
      
      <Status isClicked={isClicked}/>

      <div>
          <Bar data={data} options={options} />
      </div>
    </div>


  )
}

export default Prediction
