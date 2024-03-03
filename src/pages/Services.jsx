import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Plans from "../components/Plans"
import Banner from '../components/Banner'
import Allinone from '../components/Allinone'
import Support from '../components/Support'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
    
    <Header/>
        <Banner />
        <Cards />
        <Plans />
        <Allinone/>
        <Support></Support>
        <Footer></Footer>

    </>
  )
}

export default Services