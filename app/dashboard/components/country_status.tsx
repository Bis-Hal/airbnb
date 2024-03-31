import { faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CountryStatus = ({ranking = 0, name="", indicator = faCircle, stats = 0, image = "england"}) => {
    console.log(image);
    const img = 'bg-'+{image}+'bg-contain bg-bottom bg-no-repeat absolute bottom-0 left-0 w-full h-[70%]';

    return (
        <div className='w-56 h-56 relative rounded-lg m-2 p-4 shadow-2xl shadow-primary'>
            <div className='absolute top-0 right-0 p-2 m-2 text-lg font-black'>#{ranking}</div>
            <div className='font-bold text-primary text-lg'>{name}</div>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={indicator} className='text-red-600' />
                <div className='p-2 text-center'>{stats}</div>
            </div>
            <div className={img}></div>

        </div>
    )
}

export default CountryStatus
