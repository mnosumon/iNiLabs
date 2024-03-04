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
      <Footer/>
    </>
  )
}

export default App