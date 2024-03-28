import React from 'react'
import Horizontal_Nav_Bar from './components/horizontal_nav_bar'
import Vertical_Nav_Bar from './components/vertical_nav_bar'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
     <Horizontal_Nav_Bar />
     <Vertical_Nav_Bar />
    </div>
  )
}

export default Home
