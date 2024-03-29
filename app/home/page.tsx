import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { app_name, associated_cities, cities, slogon } from '../utils/airBnbConstants'
import Horizontal_Nav_Bar from '../components/horizontal_nav_bar'

const Home = () => {
    return (
        <div>
            <Horizontal_Nav_Bar />
            {/* hero section */}
            <section className=' bg-black h-96 flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full p-10'>
                <div className='bg-h-logo bg-cover w-56 h-20 '></div>

                <div className='flex flex-col justify-center items-end'>
                    <div className='text-white'>/{cities}</div>
                    <div className='text-white pt-2 pb-2 text-6xl'>{associated_cities}</div>
                    <div  className='text-white pe'>{slogon}</div>
                </div>
                </div>
                <div className='relative w-full h-72 flex'>
                    <div className='bg-city bg-cover h-24 w-[30%] -bottom-3 left-96 absolute'></div>
                    <div className='bg-city bg-cover h-24 w-[30%] -bottom-3 -left-3 absolute'></div>
                    <div className='bg-city bg-cover h-24 w-[30%] -bottom-3 right-96 absolute'></div>
                    <div className='bg-city bg-cover h-24 w-[30%] -bottom-3 right-0 absolute'></div>
                </div>
            </section>

            <div className='h-96'>
                Content
            </div>
            <section className='h-72 bg-black flex justify-start'>
                <div className='flex flex-col items-center justify-center p-10'>
                    <FontAwesomeIcon icon={faAirbnb} className='h-16 w-16' style={{color:'#ffffff'}}/>
                    <div className='text-white p-2 text-bold text-3xl'>{app_name}</div>
                </div>

            </section>
        </div>
    )
}

export default Home
