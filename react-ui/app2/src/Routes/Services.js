import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Abt from '../assets/23.jpg'
import Destination from '../components/Destination'
import Footer from  '../components/Footer'

function Services() {
  return (
    <div>
      <Navbar/>
     <Hero cName="hero-mid"
     heroimg={Abt}
      title="Services"
      url="/services"
      btnClass="hide"/>
     <Destination/>
    <Footer/>
    </div>
  )
}

export default Services
