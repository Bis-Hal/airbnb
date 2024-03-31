import React from 'react'
import { username, sign_in, password, account_exist_qa, sign_up, forgot_password } from '../utils/airBnbConstants'
import Link from 'next/link'
import { HOME_URL } from '../utils/url'

const SignIn = () => {
    return (
        <div className='relative flex h-screen w-full items-center justify-center'>
            <div className='rounded-xl p-5 flex flex-col justify-center items-center w-[30%] h-full'>
                <div className='text-5xl w-full p-2'>{sign_in.toUpperCase()}</div>
                <div className='mt-10'>
                    <div className='p-1'>{username}</div>
                    <div><input placeholder={username} name='username' className='p-2 mt-2 w-96 border-2 text-gray-500 border-black rounded-md' /></div>
                </div>
                <div>
                    <div className='p-1'>{password}</div>
                    <div><input placeholder={password} name='username' className='p-2 mt-2 w-96 border-2 text-gray-500 border-black rounded-md' /></div>
                </div>
                <section className='flex flex-col items-center justify-evenly mt-10'>
                    <div className='text-end w-96 '>{forgot_password}</div>
                    <Link href={HOME_URL}><div className=' hover:bg-zinc-900 relative rounded-md bg-primary text-white text-center p-4 mt-2 w-96'>
                    <div className='bg-city bg-cover w-44 h-12 absolute -bottom-2 -left-3'></div>
                    <div className='bg-city bg-cover w-44 h-12 absolute -bottom-2 right-0'></div>
                        
                        {sign_in}</div></Link>
                    <div className= 'flex mt-2'>
                        <div>
                            {account_exist_qa}
                        </div>
                        <div className='pl-2 items-end font-bold'>
                            <Link href={""}>{sign_up}</Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default SignIn
