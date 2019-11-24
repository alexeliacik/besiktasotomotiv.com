import React from 'react';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';

const Slider = () => {
  return (
    <div className="slider clearfix">
      <div className="img-wrapper">
        <div className="img-container">
          <img src={Slider1} alt="car-image1" />
          <img src={Slider3} alt="car-image3" />
          <img src={Slider2} alt="car-image2" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
