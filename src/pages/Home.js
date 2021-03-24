import React from 'react';
import Contents from '../components/contents/Contents';
import Contents2 from '../components/content2/Contents2';
import Testimonial from '../components/testimonial/Testimonial';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Title from '../components/title/Title';
import img3 from '../img3.jpg';
import mask from '../mask.png';

function Home() {
  return (
    <div>
        <div className="image" style={{ backgroundImage: `url(${mask})` }}>
              <div className="container">
                <Navbar />
              </div>
              <Slider slide={img3} />
            </div>
            <Title text="All our room types are including complementary breakfast" />
            <Contents />
            <Contents2 />
            <Testimonial />
    </div>
  );
}

export default Home;
