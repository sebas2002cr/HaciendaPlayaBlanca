// Cards.js
import React from 'react';
import './Cards.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Cards() {
  return (
    <div  className='cards'>
      <div className='container'>
        <h1> Master Plan <br/></h1>
        <div className='container-image'>
          <Zoom>
            <img
              src='./images/PlanMaestro.png'
              alt='Master Plan'
              style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Cards;
