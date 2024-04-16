'use client'
import VerticalNavBar from '@/app/components/vertical_nav_bar'
import { hotelOwnerNavBarItems } from '@/app/utils/airBnbConstants'
import React, { useState } from 'react'
import BI from './BI/page'
import MCDM from './mcdm/page'

const HotelOwnerDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState('');
  const components = {
    "Power BI":<BI />,
    "MCDM" : <MCDM />
  }
  return (
    <div className='h-full w-screen flex'>
      <VerticalNavBar navBarItems={hotelOwnerNavBarItems} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      {
        Object.entries(components).map((component) => (
          component[0] == selectedIndex ? component[1] : null
        ))
      }
      
    </div>
  )
}

export default HotelOwnerDashboard
