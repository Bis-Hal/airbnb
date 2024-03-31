import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { user_name } from '../utils/airBnbConstants'

const Profile = ({user_name = "Dear, Analytics"}) => {
  return (
    <div className='flex justify-between items-center text-secondary'>
        <div className='text-right text-sm w-full'>{user_name}</div>
        <div className='rounded-full w-10 h-10 bg-cover ring-2 ring-secondary ml-3 flex justify-center items-center'>
          <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
        </div>
      </div>
  )
}

export default Profile
