import React, { use, useEffect, useState } from 'react'
import Dropdown from '../../customer/component/dropdown'
import LineChart from '@/app/charts/line_chart';
import Status from '../../components/status';
import { Bar,  } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title, Legend, Chart } from 'chart.js';
import { faLocationPin, faHouse, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingBar from '@/app/components/rating_bar';
import { listOfCountriesMock, propertyTypes, room_types } from '@/app/utils/airBnbConstants';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend)

const PredictionRating = () => {
  const[_rating, setRating] = useState('');
  const[_price, setPrice] = useState('');
  const[modelData,setModelData] = useState('')
  const [isClicked, setCliecked] = useState(false);
  const [rating, setPP] = useState(0)
    
    useEffect(()=>{
        setPP((Math.floor(Math.random() * (4 - 1 + 1)) + 1) + Math.random() * 0.5);
    },[isClicked])

 


//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const url = new URL('http://127.0.01:3000/');
//             url.searchParams.append('rating', _rating);
          
        
//             const response = await fetch(url,{

//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin':'*'
                   
//                 },
//                 mode:'no-cors' 
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setModelData(data);
//         } catch (error) {
//             console.log('error' + error)
//         }
//     };
//     fetchData();
// }, [_rating]);

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
    <div className='w-[75%] h-full p-10 relative'>
      <div className="w-32 font-bold flex rounded-xl cursor-pointer items-center justify-center mr-16 bg-black text-white h-12 absolute top-96 right-0" onClick={()=>{setCliecked(!isClicked)}}>Submit</div>

      <div className='flex flex-wrap p-2 justify-between items-stretch w-full h-44'>
        <div className='w-56'>
          <Dropdown placeholder='Pricing' items={['1 - 2', '3 - 6', '6 - 10']} handleChange={setRating} />
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
      
        <div className='w-72 h-80 flex flex-col justify-between relative rounded-lg m-2 p-4 shadow-2xl mt-16 shadow-primary items-center'>
            <div className='relative w-20 flex items-center justify-center'>
                {/* <FontAwesomeIcon icon={faLocationPin} className='w-20 h-20' />
                <FontAwesomeIcon icon={faHouse} className='w-8 h-8 absolute text-white top-4 right-7.5 z-10' /> */}
                <div className='font-bold flex justify-center items-center w-56 h-56 text-6xl'>{rating.toFixed(1)}</div>
            </div>
            <div className='w-full'>
                <div className='font-bold text-primary text-lg'>Rating</div>
                <RatingBar rating={rating}/>
            </div>
        </div>

      <div>
          <Bar data={data} options={options} />
      </div>
    </div>


  )
}

export default PredictionRating
