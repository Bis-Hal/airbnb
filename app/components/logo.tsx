import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { slogon, welcome } from '../utils/airBnbConstants'

const Logo = ({iconSize = '28', heading1 = '6', heading2 = '2'}) => {
    return (
        <div className={'flex items-center justify-center text-secondary p-2 w-full h-full'}>
            <FontAwesomeIcon icon={faAirbnb} className='w-[40%] h-[40%] font-bold text-secondary' />
            <div className='flex flex-col items-start p-2'>
                <div className='text-6xl w-full'>
                    {welcome}
                </div>
                <div className={'text-'+heading2+'xl p-2 w-full'}>
                    {slogon}
                </div>
            </div>
        </div>

    )
}

export default Logo
