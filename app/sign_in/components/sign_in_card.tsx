import { sign_in, username, password, forgot_password, account_exist_qa, sign_up } from '@/app/utils/airBnbConstants'
import {  EXECUTIVE_DASHBOARD_URL, HOME_URL, HOTLE_OWNER_DASHBOARD_URL } from '@/app/utils/url'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SignInCard = () => {
    const [url, setUrl] = useState('');
    const [_username, setUsername] = useState('');
    const [_password, setPassword] = useState('');


    const [isHidden, setHiddentStatus] = useState(true);

    const handleUserNameInput = (event: { target: { value: React.SetStateAction<string> } }) => {
           setUsername(event.target.value);
    }
    const handlePasswordInput = (event: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(event.target.value);
    }
    function handleRouting(){
        if(_username == 'Admin'){
            setUrl(EXECUTIVE_DASHBOARD_URL);
        }
        if(_username == 'Owner'){
            setUrl(HOTLE_OWNER_DASHBOARD_URL);
        }
    }


    return (
        <div className='flex flex-col justify-between items-start h-full'>
            <div className='text-5xl w-full p-2'>{sign_in.toUpperCase()}</div>
            <div>
                <div className='p-1 text-primary' >{username}</div>
                <div><input placeholder={_username} type='text' onChange={handleUserNameInput} name='username' className='p-2 w-96 border-2 text-primary border-black rounded-md' /></div>
            </div>
            <div className='w-96'>
                <div className='p-1 text-primary'>{password}</div>
                <div className='w-96 relative'>
                    <input placeholder={_password} type={isHidden ? 'text' : 'password'} onChange={handlePasswordInput} name='password' className='border-2 p-2 w-full text-primary border-black rounded-md' />
                    <FontAwesomeIcon icon={isHidden ? faEyeSlash : faEye} onClick={() => setHiddentStatus(!isHidden)} className='w-6 h-6 p-2 absolute right-0' />
                </div>
            </div>
            <Link href={_username == 'Admin' ? EXECUTIVE_DASHBOARD_URL : HOTLE_OWNER_DASHBOARD_URL }><div className='bg-primary text-secondary w-96 p-3 text-center rounded-xl font-semibold text-xl hover:bg-zinc-800'>{sign_in}</div></Link>
            
        </div>
    )
}

export default SignInCard
