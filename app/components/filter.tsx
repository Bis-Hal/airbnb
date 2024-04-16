'use client'
import React, { useState } from 'react'
import { latitude, longitude, listOfCountriesMock, user_name } from '../utils/airBnbConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCalendarDay, faCouch, faDoorClosed, faGlobe, faHome, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Profile from './profile'
import Link from 'next/link'
import { SIGN_IN_URL } from '../utils/url'
import DateTimePicker from 'react-datetime-picker'
import Checkbox from '../dashboard/customer/component/checkbox'
import Dropdown from '../dashboard/customer/component/dropdown'

const Filter = () => {
    const mock = ["Small", "Medium", "Large", "Others"];
    const amemities = ["Fan","Wifi","Fridge","Air Conditioner", "Parking"]

    return (
        <div className='w-[25%] h-screen bg-primary flex flex-col items-start justify-between sticky left-0 top-0'>
            <div className='h-[95%] flex flex-col justify-between p-5 overflow-auto'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faCalendarCheck} className='w-5 h-5 text-secondary mr-2' />
                    <div className='text-secondary '>
                        Visited Date
                    </div></div>
                <div className='flex w-80 justify-between items-center'>
                    <div className='rounded-md bg-white border-2 p-2 w-32 border-primary flex justify-between items-center'>
                        <div className='flex items-center justify-center text-center'>2024-01-01</div>
                        <FontAwesomeIcon icon={faCalendarDay} className='w-6 h-6 text-primary' />
                    </div>
                    <div className='text-2xl'>to</div>
                    <div className='rounded-md bg-white border-2 p-2 w-32 border-primary flex justify-between items-center'>
                        <div className='flex items-center justify-center text-center'>2024-01-01</div>
                        <FontAwesomeIcon icon={faCalendarDay} className='w-5 h-5 text-primary' />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-between h-[35%]'>
                    <div className='flex w-full'>
                        <FontAwesomeIcon icon={faGlobe} className='w-5 h-5 text-secondary mr-2' />
                        <div className='text-secondary'>Geographic</div>
                    </div>
                    <div className='flex flex-wrap w-full justify-between'>
                        <div className='w-[8rem]'>
                            <div className='p-1 text-secondary' >{latitude}</div>
                            <div><input placeholder={latitude} type='number' name='latitude' step={0.01} className='p-2 w-full border-2 text-primary border-primary active:border-secondary rounded-md' /></div>
                        </div>
                        <div className='w-[8rem]'>
                            <div className='p-1 text-secondary' >{longitude}</div>
                            <div><input placeholder={longitude} type='number' step={0.01} name='latitude' className='p-2 w-full border-2 text-primary border-primary active:border-secondary rounded-md' /></div>
                        </div>
                    </div>
                    <Dropdown placeholder='Select a country' items={listOfCountriesMock} />
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faDoorClosed} className='w-5 h-5 mr-2' />
                        <div>Rooms</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between'>
                        {...mock.map(mock => <Checkbox label={mock} />)}
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faHome} className='w-5 h-5 mr-2' />
                        <div>Property</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between'>
                        {...mock.map(mock => <Checkbox label={mock} />)}
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <div className='text-secondary mb-2 flex items-center'>
                        <FontAwesomeIcon icon={faHome} className='w-5 h-5 mr-2' />
                        <div>Amemities</div>
                    </div>
                    <div className='flex flex-wrap items-start justify-between'>
                        {...amemities.map(mock => <Checkbox label={mock} />)}
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
