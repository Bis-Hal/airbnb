'use client'

import LineChart from '../../charts/line_chart';
import VerticalNavBar from '../../components/vertical_nav_bar';
import { stats_mock } from '../../mock/statsMock';
import { countries, dashboard, dashboard_counties_ranting_section_heading, executiveNavBarItems } from '../../utils/airBnbConstants';
import Status from '../components/status';
import StatsCard from '../components/stats_card';

const Dashboard = () => {
  return (
    <div className='flex justify-between relative'>
      <VerticalNavBar navBarItems={executiveNavBarItems} />
      <section className='flex flex-col w-full'>
        <div className='text-primary font-bold text-6xl p-6'>{dashboard}</div>
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
          </div>
        </section>
      </section>
    </div>
  )
}

export default Dashboard
