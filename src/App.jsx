import React from 'react'
import Navbar from './section/navbar/Navbar'
import Footer from './section/footer/Footer'
import Banner from './section/Banner'
import User from './section/User'
import Collaborate from './section/Collaborate'
import Work from './section/Work'
import Connect from './section/Connect'
import Report from './section/Report'
import Built from './section/Built'
import KindsOfTeam from './section/KindsOfTeam'
import BestTeam from './section/BestTeam'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <User/>
      <Collaborate/>
      <Work/>
      <Connect/>
      <Report/>
      <Built/>
      <KindsOfTeam/>
      <BestTeam/>
      <Footer/>
    </>
  )
}

export default App