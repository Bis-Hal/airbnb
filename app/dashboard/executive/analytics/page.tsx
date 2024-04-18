import { options } from '@/app/charts/line_chart'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title } from 'chart.js';

import { features } from 'process';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Legend)

const Analytics = () => {

  return (
    <div className='flex w-[75%] h-screen justify-center items-center'>
      <iframe className="w-full h-full" title="airbnb_ver20240415" src="https://app.powerbi.com/reportEmbed?reportId=64a1e1d8-5a13-4406-93bc-3f652a54f72c&autoAuth=true&ctid=99eeb009-e7a2-47b6-9ded-028cdcc300e6"></iframe>
    </div>
  )
}

export default Analytics
