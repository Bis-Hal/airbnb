import { faHome, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const VerticalNavBarItems = ({label="", icon=faHouse}) => {
  return (
    <div className='group flex p-2 w-full justify-between hover:bg-secondary rounded-md items-center'>
    <div className='text-secondary group-hover:text-primary'>{label}</div>
    <FontAwesomeIcon icon={icon} className='text-white group-hover:text-black'  />
  </div>
  )
}

export default VerticalNavBarItems
