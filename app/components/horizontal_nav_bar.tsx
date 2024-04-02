import React from 'react'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import Horizontal_Nav_Bar_Item from './horizontal_nav_bar_item'
import { user_name } from '../utils/airBnbConstants'
import { DASHBOARD_URL, HOME_URL } from '../utils/url'
import Link from 'next/link'
import Profile from './profile'

const Horizontal_Nav_Bar = () => {
  return (
    <div className='bg-primary text-secondary h-24 w-full flex items-center justify-between pr-12 pl-12'>
      <Link href={HOME_URL}><div className='bg-h-logo bg-cover w-40 h-14'></div></Link>
     <Profile user_name={user_name} />
    </div>
  )
}

export default Horizontal_Nav_Bar
