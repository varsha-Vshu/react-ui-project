
import React from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Homet from '../assets/111.jpg'
import Destination from '../components/Destination'
import Footer from  '../components/Footer'

function Home() {
  return (
    <div>
<Navbar/>
      <Hero cName="hero"
      heroimg={Homet}
      title="Your journey Your Story"
      text="Choose Your Favourite Destination."
     buttonText="See more Details"
      url="/"
      btnClass="show"/>
    
     <Destination/>
      <Footer/>
    </div>
  )
}

export default Home
