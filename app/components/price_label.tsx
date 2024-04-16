import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriceLabel = ({top = "0", right = "0", cost = "0", color="black"}) => {
    return (
        <div className={'flex flex-col items-center justify-center m-5 absolute'} style={{ top: `${top}%`, right: `${right}%`, color:`${color}`}}>
            <div>{cost}</div>
            <FontAwesomeIcon icon={faLocationPin} className=' w-6 h-6 m-1' />
        </div>
    )
}

export default PriceLabel
