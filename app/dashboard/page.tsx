'use client'

import LineChart from '../charts/line_chart';
import Horizontal_Nav_Bar from '../components/horizontal_nav_bar';
import VerticalNavBar from '../components/vertical_nav_bar';
import { stats_mock } from '../mock/statsMock';
import { countries, dashboard_counties_ranting_section_heading } from '../utils/airBnbConstants';
import CountryStatus from './components/country_status';
import StatsCard from './components/stats_card';

const Dashboard = () => {
  return (
    <div className='flex justify-between relative'>
      <VerticalNavBar />
      <section className='flex flex-col w-full'>
        <div className='text-primary font-bold text-6xl p-6'>Dashboard</div>
        <section className='flex justify-between m-6'>
          <div className='w-[65%]'>
            <LineChart />
          </div>
          <div className='flex flex-col'>
            {...stats_mock.map((mock, index) => <StatsCard title={mock.title} years={mock.years} indicator={mock.indicator} chart={mock.chart} stats={mock.stats} amount={mock.amount} key={index}/>)}
          </div>
        </section>
        <section className='w-full flex flex-col p-6'>
          <div className='text-2xl font-bold mb-6'>{dashboard_counties_ranting_section_heading}</div>
          <div className='flex justify-between items-center'>
            {...countries.map((country, index) => <CountryStatus name={country.name} stats={country.stats} image={country.image} indicator={country.indicator} ranking={index + 1} key={index}/>)}
          </div>
        </section>
      </section>
    </div>
  )
}

export default Dashboard
