import React from 'react'
import Navbar from './section/navbar/Navbar'
import Footer from './section/footer/Footer'
import Banner from './section/Banner'
import User from './section/User'
import Collaborate from './section/Collaborate'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <User/>
      <Collaborate/>
      <Footer/>
    </>
  )
}

export default App