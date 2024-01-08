import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import COnt from "../assets/22.jpg"
import Contt from '../components/Contt'
import Footer from  '../components/Footer'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName="hero-mid"
      heroimg={COnt}
      title="Your journey Your Story"
      text="Choose Your Favourite Destination."
     buttonText="See more Details"
      url="/contact"
      btnClass="show"/>
      
        <Contt/>
        <Footer/>
      </div>
    
    
  );
};

export default Contact;

