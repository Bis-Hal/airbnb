import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import Horizontal_Nav_Bar_Item from './horizontal_nav_bar_item'
import { user_name } from '../utils/airBnbConstants'
import { DASHBOARD_URL, HOME_URL } from '../utils/url'
import Link from 'next/link'

const Horizontal_Nav_Bar = () => {
  return (
    <div className='bg-primary h-24 w-full flex items-center justify-between p-2'>
      <Link href={HOME_URL}><div className='bg-h-logo bg-cover w-40 h-14'></div></Link>
      <div className='flex justify-between items-center h-full'>
        <Horizontal_Nav_Bar_Item icon={faBars} url={DASHBOARD_URL} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
        <Horizontal_Nav_Bar_Item icon={faBars} />
      </div>
      <div className='flex justify-between items-center'>
        <div className='w-44 text-right text-secondary'>{user_name}</div>
        <div className='bg-usa rounded-full w-10 h-10 bg-cover ring-2 ring-secondary ml-2'></div>
      </div>
    </div>

  )
}

export default Horizontal_Nav_Bar
