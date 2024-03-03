import React from 'react'
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Img from '../components/Img';
import Plans from '../components/Plans';
import Allinone from '../components/Allinone';
import Trust from '../components/Trust';
import Support from '../components/Support';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>

        <Header/>
        <Banner />
        <Img />
        <Trust></Trust>
        <Cards />
        <Plans />
        <Allinone/>
        <Newsletter></Newsletter>
        <Support></Support>
        <Team></Team>
        <Form></Form>
        <Footer></Footer>



    </div>
  )
}

export default Home;