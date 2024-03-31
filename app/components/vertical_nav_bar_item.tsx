import { faHome, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const VerticalNavBarItems = ({ label = "", icon = faHouse, url = "" }) => {
  return (
    <Link href={url} className=' left-0 top-0 sticky'>
      <div className='group flex p-2 w-full justify-between hover:bg-secondary rounded-md items-center'>
        <div className='text-secondary group-hover:text-primary'>{label}</div>
        <FontAwesomeIcon icon={icon} className='text-secondary group-hover:text-primary' />
      </div>
    </Link>

  )
}

export default VerticalNavBarItems
