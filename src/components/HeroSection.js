import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <>
      <div className='hero-container'>
      <video src='.\videos\VideoAgua.mp4' autoPlay loop muted />
      <img src='./images/TerraticaLogo.png' style={{ width: '200px', height: 'auto', marginBottom: '200px'}}/>
        <h1 className='title'>PROXIMAMENTE<br />HACIENDA PLAYA BLANCA </h1>
      </div>
    </>
  );
}

export default HeroSection;
