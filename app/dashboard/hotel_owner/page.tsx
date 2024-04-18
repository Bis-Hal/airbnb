'use client'
import VerticalNavBar from '@/app/components/vertical_nav_bar'
import { hotelOwnerNavBarItems } from '@/app/utils/airBnbConstants'
import React, { useState } from 'react'
import Prediction from './prediction/page'
import PredictionRating from './rating_pred/page'



const HotelOwnerDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState('');
  const components = {
    "Dashboard" : <div className='flex justify-center items-center w-[75%] h-screen'>
      <iframe className='w-full h-full' title="airbnb_ver20240415-host" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=393b4343-c121-4b49-a4bd-8f692addc21d&autoAuth=true&ctid=99eeb009-e7a2-47b6-9ded-028cdcc300e6"></iframe>
    </div>,
    "Prediction Price": <Prediction />,
    "Prediction Rating" : <PredictionRating />

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
