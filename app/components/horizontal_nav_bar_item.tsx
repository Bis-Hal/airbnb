import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Horizontal_Nav_Bar_Item = ({icon = faBars}) => {
  return (
    <div className='group flex flex-col justify-between items-center h-full mr-24'>
      <div></div>
      <FontAwesomeIcon icon={icon} className= "" style={{ color: "#000000", width: "20px", height: "20px", }} />
      <div className='group-hover:bg-black h-1 w-8 rounded-xl'></div>
    </div>
  )
}


export default Horizontal_Nav_Bar_Item
