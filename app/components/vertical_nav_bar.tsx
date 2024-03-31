import React from 'react'
import { navBarItems, user_name } from '../utils/airBnbConstants'
import VerticalNavBarItems from './vertical_nav_bar_item'
import { Hash } from 'crypto'
import Profile from './profile'
import { HOME_URL } from '../utils/url'
import Link from 'next/link'

const VerticalNavBar = () => {
  return (

    <div className='w-[17%] h-screen bg-primary flex flex-col items-start justify-between p-6 sticky left-0 top-0'>
      <div className='flex flex-col w-full'>
        <Link href={HOME_URL}>
        <div className='w-full bg-h-logo h-14 bg-cover mb-6'></div>
        </Link>
        {
          Object.entries(navBarItems).map(([key, value]) => (
            <div className='mt-5 mb-5 mr-4 w-full' key={key}>
              <div className='text-secondary'>{key}</div>
              {...value.map(e => <VerticalNavBarItems label={e.label} icon={e.icon} url={e.url} key={crypto.randomUUID()} />)}
            </div>
          ))
        }
      </div>
      <Profile user_name={user_name} />
    </div>
  )
}

export default VerticalNavBar
