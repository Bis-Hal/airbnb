import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import Horizontal_Nav_Bar_Item from './horizontal_nav_bar_item'
import { user_name } from '../utils/airBnbConstants'
import { DASHBOARD_URL } from '../utils/url'

const Horizontal_Nav_Bar = () => {
  return (
    <div className='bg-white h-20 w-full pt-2 pb-2 flex items-center justify-between pr-12 pl-12'>
      <FontAwesomeIcon size='2xl' className='w-10 h-10 ' icon={faAirbnb} style={{ color: "#000000", }} />
      <div className='flex justify-between items-center h-full'>
        <Horizontal_Nav_Bar_Item icon={faBars} url={DASHBOARD_URL} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
      </div>
      <div className='flex justify-between items-center'>
        <div className='w-44 text-right'>{user_name}</div>
        <div className='bg-usa rounded-full w-14 h-14 bg-cover ring-2 ring-black ml-2'></div>

      </div>
    </div>

  )
}

export default Horizontal_Nav_Bar
