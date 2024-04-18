import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

interface CheckboxProps{
  label: string,
  setSelectedValues: React.Dispatch<React.SetStateAction<string>>
}
const Checkbox : React.FC<CheckboxProps> = ({label = "", setSelectedValues}) => {
    const[isSelected, setSelected] = useState(false);
  
    const  handleSelectedItem= () => {
        setSelected(!isSelected);
        setSelectedValues(label)
    }
    return (
    <div className='text-secondary flex justify-between items-center w-auto h-10 cursor-pointer' onClick={()=>handleSelectedItem()}>
    <FontAwesomeIcon icon={isSelected ? faSquareCheck : faSquare  } className=' text-secondary w-5 h-5' />
    <div className='h-full flex items-center p-2'>{label}</div>
</div>
  )
}

export default Checkbox
