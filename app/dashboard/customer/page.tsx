'use client'

import Filter from "@/app/components/filter";
import { countries } from "@/app/utils/airBnbConstants";
import { useState } from "react";
import Status from "../components/status";


const CustomerDashboard = () => {

    return (
        <div className='relative w-full h-full flex'>
            <Filter />

            <div className='h-full flex flex-wrap w-full p-10 justify-between'>
                {...countries.map((country, index) => <Status name={country.name} stats={country.stats} indicator={country.indicator} ranking={index + 1} key={index} />)}

            </div>


        </div>

    )
}

export default CustomerDashboard



