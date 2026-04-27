import React from 'react'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import About from './layouts/About'
import Portfolio from './layouts/Portfolio'
import Contant from './layouts/Contant'


const App = () => {
  return (
    <div >

      <Navber/>
      <Banner/>
      <Service/>
      <About/>
      <Portfolio/>
      <Contant/>
      
    </div>
  )
}

export default App