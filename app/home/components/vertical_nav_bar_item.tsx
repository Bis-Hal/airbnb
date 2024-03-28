import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Vertical_Nav_Bar_Item = () => {
  return (
    <div className='group hover:bg-white flex justify-between p-2 mt-2 items-center'>
                    <div className='group-hover:text-black font-bold text-white'>Dashboard</div>
                    <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", width: "20px", height: "20px", }} />
                </div>
  )
}


export default Vertical_Nav_Bar_Item
