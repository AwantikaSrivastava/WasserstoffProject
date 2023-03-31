import React from 'react'
import WorldMap from '../WorldMap/WorldMap'
import Sidebar from '../Sidebar/Sidebar'
import BarChart from '../BarChart/BarChart'


const Home = () => {
    //Home Section
  return (
    <div>
      <Sidebar/>
      <WorldMap/>
      <BarChart/>
    </div>
  )
}

export default Home