import React from 'react'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import About from './layouts/About'
import Portfolio from './layouts/Portfolio'
import Contant from './layouts/Contant'
import Client from './layouts/Client'
import Footer from './layouts/Footer'


const App = () => {
  return (
    <div >

      <Navber/>
      <Banner/>
      <Service/>
      <About/>
      <Portfolio/>
      <Contant/>
      <Client/>
      <Footer/>
      
    </div>
  )
}

export default App