import React from 'react'
import { username, sign_in, password, account_exist_qa, sign_up } from '../utils/airBnbConstants'
import Link from 'next/link'
import { HOME_URL } from '../utils/url'

const SignIn = () => {
    return (
        <div className='relative flex h-full w-full items-center justify-center'>
            <div className='bg-airbnb bg-cover w-full'> 
            </div>
        
            <div className='bg-white rounded-xl p-5 right-10 top-10 flex flex-col justify-center items-center w-[30%]'>
                <div className='text-5xl w-full p-2'>Sign in</div>
                <div className='mt-10'>
                    <div className='p-1'>{username}</div>
                    <div><input placeholder={username} name='username' className='p-2 mt-2 w-96 border-2 text-gray-500 border-black rounded-md' /></div>
                </div>
                <div>
                    <div className='p-1'>{password}</div>
                    <div><input placeholder={password} name='username' className='p-2 mt-2 w-96 border-2 text-gray-500 border-black rounded-md' /></div>
                </div>
                <section className='flex flex-col items-center justify-evenly mt-10'>
                    <div className='text-end w-96 '>Forget Password</div>
                    <Link href={HOME_URL}><div className='rounded-md bg-black text-white text-center p-2 mt-2 w-96'>{sign_in}</div></Link>
                    <div className='flex mt-2'>
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
