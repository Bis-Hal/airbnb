import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({ user_name = "Dear, Analytics" }) => {
  return (
    <div className='flex justify-between items-center relative group w-full'>
      <div className='text-right text-md w-full text-primary'>{user_name}</div>
      <div className='rounded-full w-12 p-2 h-9 bg-cover ring-2 ml-3 ring-primary flex justify-center items-center text-secondary'>
        <FontAwesomeIcon icon={faUser} className='w-5 h-5 text-primary' />
      </div>
    </div>
  )
}

export default Profile
