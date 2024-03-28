import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Vertical_Nav_Bar = () => {
  return (
        <div className='bg-black h-full w-[16%]'>
            <div>profile</div>
            <div>
                <div className='group hover:bg-white flex justify-between p-2 mt-2 items-center'>
                    <div className='group-hover:text-black font-bold text-white'>Dashboard</div>
                    <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", width: "20px", height: "20px", }} />
                </div>
            </div>
        </div>

  )
}

export default Vertical_Nav_Bar
