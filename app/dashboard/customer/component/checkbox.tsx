import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Checkbox = ({label = "",  selected = false}) => {
    const[isSelected, setSelected] = useState(selected);

    const  handleSelectedItem= () => {
        setSelected(!isSelected);
    }
    return (
    <div className='text-secondary flex justify-between items-center w-auto h-10 cursor-pointer' onClick={()=>handleSelectedItem()}>
    <FontAwesomeIcon icon={isSelected ? faSquareCheck : faSquare  } className=' text-secondary w-5 h-5' />
    <div className='h-full flex items-center p-2'>{label}</div>
</div>
  )
}

export default Checkbox
