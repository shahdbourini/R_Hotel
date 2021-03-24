import React from 'react';
import FaContents from '../components/facilities/FaContents';
import Testimonial from '../components/testimonial/Testimonial';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Title from '../components/title/Title';
import img2 from '../img2.jpg';

function Facilities() {
  return (
    <div>
      <div className="image" style={{ backgroundImage: `url(${img2})` }}>
        <div className="container">
          <Navbar />
        </div>
        <Slider slide={img2} />
      </div>
      <Title
        text="We want your stay at our lush hotel to be truly unforgettable. 
             That is why we give special attention to all of your needs so that we can ensure an experience quite unique
            Luxury hotels offers the perfect setting with stunning
             views for leisure and our modern luxury resort facilities will help you enjoy the best of all. "
        title="Facilities"
      />
      <FaContents />
      <Testimonial />
    </div>
  );
}

export default Facilities;
