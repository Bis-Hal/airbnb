'use client'
import React, { useState } from 'react'
import { hotelOwnerNavBarItems, slogon, user_name, welcome } from '../utils/airBnbConstants'
import VerticalNavBarItems from './vertical_nav_bar_item'
import { Hash } from 'crypto'
import Profile from './profile'
import { HOME_URL } from '../utils/url'
import Link from 'next/link'
import Logo from './logo'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type NavBarItems = {
  icon: IconProp;
  label: string;
  url: string;
}[];

type NavBarItemsObject = {
  [key: string]: NavBarItems;
};
interface verticalNavBarProps{
  navBarItems:  NavBarItemsObject,
  setSelectedIndex: React.Dispatch<React.SetStateAction<string>>
  selectedIndex: string
}


const VerticalNavBar: React.FC<verticalNavBarProps> = ({ navBarItems, setSelectedIndex , selectedIndex})=> {


  return (

    <div className='w-[25%] h-screen bg-primary flex flex-col items-start sticky left-0 top-0'>
      <div className='flex flex-col w-full'>
        <div className={'flex justify-start p-6 text-secondary w-full h-26 items-start'}>
          <FontAwesomeIcon icon={faAirbnb} className='w-16 h-16 font-bold text-secondary' />
          <div className='flex flex-col items-start '>
            <div className='text-3xl w-full'>
              {welcome}
            </div>
            <div className={'text-md pl-2  w-full'}>
              {slogon}
            </div>
          </div>
        </div>
        <div className='p-6 flex flex-col h-full justify-start'>
          {
            Object.entries(navBarItems).map(([key, value]) => (
              <div className='mt-5 mb-5 mr-4 w-full' key={key}>
                <div className='text-secondary'>{key}</div>
                {...value.map((e, index) => <VerticalNavBarItems label={e.label} icon={e.icon} url={e.url} key={index} setSelectedIndex={setSelectedIndex}  selectedIndex={selectedIndex} />)}
              </div>
            ))
          }
        </div>

      </div>
      <Profile user_name={user_name} />
    </div>
  )
}

export default VerticalNavBar
