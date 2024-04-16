'use client'

import Logo from '@/app/components/logo'
import PriceLabel from '@/app/components/price_label'
import Link from 'next/link'
import { cost_coordinates, explore, slogon_2 } from '../utils/airBnbConstants'
import { CUSTOMER_DASHBOARD } from '../utils/url'
import SignInCard from './components/sign_in_card'

const AdminSignIn = () => {

    return (
        <section className='h-screen w-screen flex relative bg-half'>
            {...cost_coordinates.map((cost_coordinate, index) => (<PriceLabel top={cost_coordinate.y} right={cost_coordinate.x} cost={cost_coordinate.cost} color={cost_coordinate.color} key={index} />))}
            <div className='flex justify-between items-center w-full h-full p-32'>
                <section className=' text-secondary h-full relative flex flex-col justify-between items-center'>
                    <Logo />
                    <div>
                        <div className='text-lg text-right w-96 p-2'>{slogon_2}</div>
                        <Link href={CUSTOMER_DASHBOARD}><div className='bg-secondary text-primary w-96 p-3 text-center rounded-xl font-semibold text-xl hover:bg-gray-200'>{explore}</div></Link>
                    </div>
                </section>
                <SignInCard />
            </div>
        </section>
    )
}
export default AdminSignIn
