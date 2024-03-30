'use client'
import React, { useEffect } from 'react'
import Horizontal_Nav_Bar from '../components/horizontal_nav_bar'
import LineChart from '../charts/line_chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faHome, faLongArrowRight, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Pie } from 'react-chartjs-2';
import PieChart from '../charts/pie_chart';
import DonutChart from '../charts/donut_chart';
import StatsCard from './components/stats_card';
import { stats_mock } from '../mock/statsMock';



const Dashboard = () => {
  return (
    <div className='h-screen w-screen flex bg-secondary'>
      <div className='w-72 h-full bg-primary flex flex-col items-center justify-between p-3'>
        <div className='bg-h-logo bg-cover w-40 h-14'></div>
        <div className='group flex p-2 w-full justify-between hover:bg-secondary rounded-md'>
          <div className='text-secondary group-hover:text-primary'>Dashboard</div>
          <FontAwesomeIcon icon={faHome} style={{color:"#ffffff"}} />
        </div>

      </div>
      <div className='flex w-full h-full'>
        <div className='w-full'>
          <LineChart />
        </div>
        <div>
         {
          ...stats_mock.map((mock,index)=><StatsCard 
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
      </div>
    </div>
  )
}

export default Dashboard
