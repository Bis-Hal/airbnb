'use client'
import React from 'react'
import LineChart from '../charts/line_chart';
import StatsCard from './components/stats_card';
import { stats_mock } from '../mock/statsMock';
import { navBarItems } from '../utils/airBnbConstants';
import VerticalNavBarItems from '../components/vertical_nav_bar_item';
import Horizontal_Nav_Bar from '../components/horizontal_nav_bar';
import VerticalNavBar from '../components/vertical_nav_bar';




const Dashboard = () => {
  return (
    <div className='h-screen w-screen flex flex-col bg-secondary'>
      <Horizontal_Nav_Bar />
      <div className='flex w-full h-full'>
        <VerticalNavBar />
        <section className='flex m-5 w-full'>
          <div className='w-full '>
            <LineChart />
          </div>
          <div>
            {
              ...stats_mock.map((mock, index) => <StatsCard
                title={mock.title}
                indicator={mock.indicator}
                amount={mock.amount}
                chart={mock.chart}
                stats={mock.stats}
                years={mock.years}
                key={index}

              />)
            }
          </div>
        </section>
      </div>




    </div >
  )
}

export default Dashboard
