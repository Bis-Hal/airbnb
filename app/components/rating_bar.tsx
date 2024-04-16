import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const RatingBar = ({ rating = 0 }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className='flex'>
            {
                ...stars.map(star => (
                    <div key={star} >
                        <FontAwesomeIcon icon={star <= Math.round(rating) && Math.round(rating) == star && rating % star != 0 ? faStarHalf : faStar} className={Math.round(rating) >= star ? 'text-amber-300 w-5 h-5' : 'text-zinc-200 w-5 h-5'} />
                    </div>
                ))
            }
        </div>



    )
}

export default RatingBar
