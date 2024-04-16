import RatingBar from '@/app/components/rating_bar'
import { faArrowDown, faCalendar, faCalendarDay, faCircle, faCoins, faHouse, faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Status = ({ ranking = 0, name = "", indicator = faCircle, stats = 0 }) => {

    return (
        <div className='w-72 h-80 flex flex-col justify-between relative rounded-lg m-2 p-4 shadow-2xl mt-16 shadow-primary items-center'>
            <div className='flex flex-col items-center'>
               <div className='font-bold text-xl'>$600</div>
               <div>Normal</div>
            </div>
            <div className='relative w-20 flex items-center justify-center'>
                <FontAwesomeIcon icon={faLocationPin} className='w-20 h-20' />
                <FontAwesomeIcon icon={faHouse} className='w-8 h-8 absolute text-white top-4 right-7.5 z-10' />
            </div>
            <div className='w-full'>
                <div className='font-bold text-primary text-lg'>{name}</div>
                <div className='text-primary text-sm'>additional info</div>
                <RatingBar rating={2.5} />
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col items-start justify-center text-sm'>
                    <div className='flex mb-2'>
                        <FontAwesomeIcon icon={faCoins} className='w-4 h-4 ' />
                        <div className='h-full text-center ml-2'>New Year</div>
                    </div>
                    <div className='font-bold text-lg'>$1200</div>

                </div>
                <div className='flex flex-col items-start justify-center text-sm'>
                    <div className='flex mb-2'>
                        <FontAwesomeIcon icon={faCoins} className='w-4 h-4 ' />
                        <div className='h-full text-center ml-2'>Festival</div>
                    </div>
                    <div className='font-bold text-lg'>$1200</div>

                </div>
            </div>
        </div>
    )
}

export default Status
