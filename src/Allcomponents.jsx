import React from 'react'
import './css/style.css'
// import './animate/animate.css'
// import './animate/animate.min.css'
import Topnavbar from './Components/Topnavbar'
import Mainnavbar from './Components/Mainnavbar';
import Carousel from './Components/Carousel';
import Features from './Components/Features';
import About from './Components/About';
import FactCounter from './Components/FactCounter';
import Services from './Components/Services';
import CarStepsProcess from './Components/CarStepsProcess';
import Blog from './Components/Blog';
import Banner from './Components/Banner';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import BacktoTop from './Components/BacktoTop';



function Allcomponents() {
  return (
    <div>
         <Topnavbar />
      <Mainnavbar />
      <Carousel />
      <Features />
      <About />
      <FactCounter />
      <Services />
      <CarStepsProcess />
      <Blog />
      <Banner />
      <Team />
      <Testimonial />
      <Footer />
      <Copyright />
      <BacktoTop />
      
    </div>
  )
}

export default Allcomponents
