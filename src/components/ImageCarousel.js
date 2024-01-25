import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ImageCarousel(props) {

    return (     
        <>
            <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} showArrows={true} showIndicators={true} >            
                {props.data.map((image, index) => (
                    <div key={index}>            
                    <Zoom>
                        <img                         
                        src={image} 
                        style={{
                            width: '100%',
                            height: 'auto',
                            // backgroundColor: '#add8e6' 
                        }}
                        />
                    </Zoom>
                    </div>            
                ))}
            </Carousel>
        </>     
    );
}

export default ImageCarousel;