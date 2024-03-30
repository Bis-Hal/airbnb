import React from 'react'
import { navBarItems } from '../utils/airBnbConstants'
import VerticalNavBarItems from './vertical_nav_bar_item'

const VerticalNavBar = () => {
  return (
    <div className='w-96 h-full bg-primary flex flex-col items-start p-2'>
     {
     Object.entries(navBarItems).map(([key, value])=> (
      <div className='mt-5 mb-5 mr-4 w-full'>
      <div className='text-secondary'>{key}</div>
      
      {...value.map(e=><VerticalNavBarItems label={e.label} icon={e.icon}/>)}
      </div>
     ))
     }

      </div>
  )
}

export default VerticalNavBar
