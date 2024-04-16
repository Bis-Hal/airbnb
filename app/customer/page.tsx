'use client'
import { faCalendarDay, faUpDown } from '@fortawesome/free-solid-svg-icons';
// import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import Status from '../dashboard/components/status';
import Filter from '../components/filter';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import LineChart from '../charts/line_chart';
import Profile from '../components/profile';
import { countries, user_name } from '../utils/airBnbConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StatsCard from '../dashboard/components/stats_card';
import { stats_mock } from '../mock/statsMock';

const CustomerSignIn = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='relative w-full h-full flex'>
            <Filter />

            <div className='h-full flex flex-wrap w-full p-10 justify-between'>
                {...countries.map((country, index) => <Status name={country.name} stats={country.stats} indicator={country.indicator} ranking={index + 1} key={index} />)}

            </div>
        

        </div>

    )
}

export default CustomerSignIn



