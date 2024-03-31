import DonutChart from '@/app/charts/donut_chart'
import { faArrowTrendUp, faD, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stat } from 'fs'
import React from 'react'

const StatsCard = ({ title = "", amount = "", indicator = faDotCircle, stats = "", years = [1, 2], chart = <div></div> }) => {
  return (
    <div className='flex rounded-xl bg-gradient-to-r from-zinc-800 to-black border-black border-2 text-secondary p-5 justify-between h-44 w-80 m-5'>
      <div className='flex flex-col justify-between items-start w-full'>
        <div className='text-xl'>{title}</div>
        <div className='flex flex-col items-start justify-between'>
          <div className=' text-sm'>{amount}</div>
          <div className='flex mt-2'>
            <FontAwesomeIcon icon={indicator} flip="horizontal" style={{ color: "#ffffff", }} />
            <div className='text-s ml-2'>{stats}</div>
          </div>
          <div className='flex items-center justify-between w-full mt-3'>
            <div className='flex items-center'>
              <div className='w-2 h-2 bg-secondary rounded-full mr-2'></div>
              <div className='text-xs'>{years[0]}</div>
            </div>
            <div className='text-xs'>{years[1]}</div></div>
        </div>
      </div>
      {chart}
    </div>
  )
}

export default StatsCard
