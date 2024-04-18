'use client'

import LineChart from '../../charts/line_chart';
import VerticalNavBar from '../../components/vertical_nav_bar';
import { stats_mock } from '../../mock/statsMock';
import { countries, dashboard, dashboard_counties_ranting_section_heading, executiveNavBarItems } from '../../utils/airBnbConstants';
import Status from '../components/status';
import StatsCard from '../components/stats_card';
import { useState } from 'react';
import Analytics from './analytics/page';
import Prediction from '../hotel_owner/prediction/page';

const ExecutiveDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState('Dashboard');
  const component = {
    "Dashboard":
      <div className='flex flex-col w-full h-full'>
        <div className='text-primary font-bold text-6xl p-6'>{dashboard}</div>
        <div className='w-full h-full flex'>

          <div className='w-[65%]'>
            <LineChart />
          </div>
          <div className='flex flex-col'>
            {...stats_mock.map((mock, index) => <StatsCard title={mock.title} years={mock.years} indicator={mock.indicator} chart={mock.chart} stats={mock.stats} amount={mock.amount} key={index} />)}
          </div>
        </div>
      </div>,

    "Analytics": <Analytics />
  }
  return (
    <div className='flex justify-between relative w-full h-screen'>
      <VerticalNavBar navBarItems={executiveNavBarItems} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <section className='flex flex-col w-full'>
        <section className='flex justify-between w-full h-full m-6'>
          {
            Object.entries(component).map((component) => (
              component[0] == selectedIndex ? component[1] : null
            ))
          }

        </section>
      </section>
    </div>
  )
}

export default ExecutiveDashboard
