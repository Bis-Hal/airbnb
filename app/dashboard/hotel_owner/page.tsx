import VerticalNavBar from '@/app/components/vertical_nav_bar'
import { hotelOwnerNavBarItems } from '@/app/utils/airBnbConstants'
import React from 'react'

const HotelOwner = () => {
  return (
    <div className='h-full w-full flex'>
      <VerticalNavBar navBarItems={hotelOwnerNavBarItems} />
      
    </div>
  )
}

export default HotelOwner
