'use client'
import React, { use, useEffect, useState } from 'react'
import { latitude, longitude, listOfCountriesMock, user_name, room_types, propertyTypes } from '../utils/airBnbConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCalendarDay, faCouch, faDoorClosed, faGlobe, faHome, faSignOut, faStar } from '@fortawesome/free-solid-svg-icons'
import Profile from './profile'
import Link from 'next/link'
import { SIGN_IN_URL } from '../utils/url'
import DateTimePicker from 'react-datetime-picker'
import Checkbox from '../dashboard/customer/component/checkbox'
import Dropdown from '../dashboard/customer/component/dropdown'

interface FilterProps{
    setModelPrice : React.Dispatch<React.SetStateAction<string>>,
    setModelPriceClass: React.Dispatch<React.SetStateAction<string>> 
}
const Filter : React.FC<FilterProps> = ({setModelPrice,setModelPriceClass}) => {
    const [room, setRoom] = useState('');
    const [proporty, setProperty] = useState('');
    const [country, setCountry] = useState('');
   
    const [rating, setRating] = useState('');

    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             console.log("Hitting")
    //             const url = new URL('http://127.0.01:1000/');
    //             url.searchParams.append('room', room);
    //             url.searchParams.append('proporty', proporty);
    //             url.searchParams.append('country', country);
    //             url.searchParams.append('rating',rating);
            
    //             const response = await fetch(url,{

    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin':'*'
                       
    //                 },
    //                 // mode:'cors' 
    //             });
                
    //             const data = await response.json();
    //             console.log(data)
    //             console.log(data["price"])
    //             setModelPrice(data.price)
    //             setModelPriceClass(data["price class"])

    //         } catch (error) {
    //             console.log('error ' + error)
    //         }
    //     };
    //     fetchData();
    // }, [room, country, proporty,rating]);

    const mock = ["Small", "Medium", "Large", "Others"];
    const amemities = ["Fan", "Wifi", "Fridge", "Air Conditioner", "Parking"]

    return (
        <div className='w-[25%] h-screen bg-primary flex flex-col items-start justify-between sticky left-0 top-0'>
            <div className='h-[95%] flex flex-col justify-between p-5'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faCalendarCheck} className='w-5 h-5 text-secondary mr-2' />
                    <div className='text-secondary '>
                        Visit Date
                    </div></div>
                <div className='flex w-80 justify-between items-center' >
                    <div className='rounded-md bg-white  p-2 w-full border-primary flex justify-between items-center'>
                        <input placeholder='2024-01-01' className='rounded-xl w-full'/>
                        <FontAwesomeIcon icon={faCalendarDay} className='w-6 h-6 text-primary' />
                    </div>
                  
                </div>
                <div className='w-full flex flex-col items-center justify-between'>
                    <div className='flex w-full mb-3'>
                        <FontAwesomeIcon icon={faGlobe} className='w-5 h-5 text-secondary mr-2' />
                        <div className='text-secondary'>Geographic</div>
                    </div>
                    {/* <div className='flex flex-wrap w-full justify-between'>
                        <div className='w-[8rem]'>
                            <div className='p-1 text-secondary' >{latitude}</div>
                            <div><input placeholder={latitude} type='number' name='latitude' step={0.01} className='p-2 w-full border-2 text-primary border-primary active:border-secondary rounded-md' onChange={(event) => handleOnProportyChange(event)} /></div>
                        </div>
                        <div className='w-[8rem]'>
                            <div className='p-1 text-secondary' >{longitude}</div>
                            <div><input placeholder={longitude} type='number' step={0.01} name='latitude' className='p-2 w-full border-2 text-primary border-primary active:border-secondary rounded-md' /></div>
                        </div>
                    </div> */}
                    <Dropdown placeholder='Select a country' items={listOfCountriesMock} handleChange={setCountry} />
                </div>
                <div className='w-full flex flex-col items-center justify-between'>
                    <div className='flex w-full mb-3'>
                        <FontAwesomeIcon icon={faStar} className='w-5 h-5 text-secondary mr-2' />
                        <div className='text-secondary'>Rating</div>
                    </div>
                    <Dropdown placeholder='Rating' items={["low","high","average"]} handleChange={setRating} />
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faDoorClosed} className='w-5 h-5 mr-2' />
                        <div>Rooms</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between w-full'>
                        {<Dropdown placeholder='Room Types' items={room_types} handleChange={setCountry} />}
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faHome} className='w-5 h-5 mr-2' />
                        <div>Property</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between w-full'>
                        {<Dropdown placeholder='Property Types' items={propertyTypes} handleChange={setCountry} />}
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faHome} className='w-5 h-5 mr-2' />
                        <div>Amemities</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between'>
                        {...amemities.map((mock, index) => <Checkbox label={mock} key={index} setSelectedValues={()=>{}} />)}
                    </div>
                </div>
            </div>
            <Link href={SIGN_IN_URL} className='w-full'>
                <div className='text-secondary flex justify-between items-center font-bold p-4 group hover:bg-secondary cursor-pointer w-full'>
                    <FontAwesomeIcon icon={faSignOut} className='w-5 h-5 group-hover:text-primary text-secondary' />
                    <div className='group-hover:text-primary '>Back</div>
                </div>
            </Link>


        </div>
    )
}

export default Filter
