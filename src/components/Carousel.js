import React from 'react';
import ImageCarousel from './ImageCarousel';
import Grid from "@mui/material/Grid";

function Carousel() {
  const imagesData = ["./images/Foto1.jpeg", "./images/Foto2.jpeg", "./images/Foto3.jpeg", "./images/Foto4.jpeg"]
  return (
    <div className='slider'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
              <ImageCarousel data={imagesData}/>
          </Grid>
          
        </Grid>
      </div>

  );
}

export default Carousel;