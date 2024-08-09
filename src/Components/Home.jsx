import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import HomePage2 from './HomePage2'
import HomePage3 from './HomePage3'
import HomePage4 from './HomePage4'
import Questions from './Questions'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <HomePage2/>
        <HomePage3/>
        <HomePage4/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default Home