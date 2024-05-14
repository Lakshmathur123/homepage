

import React from 'react';
import './Hero.css';
import image1 from '../../assests/people1.jpg'
import image2 from '../../assests/people2.jpg';
import image3 from '../../assests/people3.jpg'
import image4 from '../../assests/people4.jpg'
import image5 from '../../assests/people5.jpg'
import image6 from '../../assests/people6.jpg'

const Hero = () => {
    return (
      <div className='hero container'>
        <div className='hero-text'>
          <h1> WE ARE THE PEOPLE WHO MAKE UNTITLED UI</h1>
          <p> Our Philosophy is simple; hire great people and give them the resources and support to do their best work.</p>
        </div>
        <div className='image-row'>
          <div className='image-with-text'>
            <img src={image1} alt='Image 1' />
            <p>Name of the person</p>
          </div>
          <div className='image-with-text'>
            <img src={image2} alt='Image 2' />
            <p>Name of the person</p>
          </div>
          <div className='image-with-text'>
            <img src={image3} alt='Image 3' />
            <p>Name of the person</p>
          </div>
          <div className='image-with-text'>
            <img src={image4} alt='Image 4' />
            <p>Name of the person</p>
          </div>
          <div className='image-with-text'>
            <img src={image5} alt='Image 5' />
            <p>Name of the person</p>
          </div>
          <div className='image-with-text'>
            <img src={image6} alt='Image 6' />
            <p>Name of the person</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;