import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import  sendimage from '../assets/24.jpg'
import Aboutus from '../components/Aboutus'
import Footer from  '../components/Footer'


function About() {
  return (
   
    <div>
       <Navbar/>
     <Hero cName="hero-mid"
      heroimg={sendimage}
      title="About"
      
      url="/about"
      btnClass="hide"/>

  <Aboutus/>
  <Footer/>
    </div>
  )
}

export default About
