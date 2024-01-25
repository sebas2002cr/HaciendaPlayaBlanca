// LandingPage.js
import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Carousel from '../Carousel';
import InfoCard from '../InfoCard';
import '../../App.css';

function LandingPage() {
  return (
    <>
      <HeroSection id="inicio" />
      <Carousel />
      <Cards id="plano" />
      <InfoCard id="contacto" />
    </>
  );
}

export default LandingPage;




// ngrok http 3000