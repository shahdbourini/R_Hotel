import RoContents from '../components/rooms/RoContents';
import Testimonial from '../components/testimonial/Testimonial';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Title from '../components/title/Title';
import img2 from '../img2.jpg';

function Rooms() {
  return (
    <div>
      <div className="image" style={{ backgroundImage: `url(${img2})` }}>
        <div className="container">
          <Navbar />
        </div>
        <Slider slide={img2} />
      </div>
      <Title
        text="Each of our bright, light-flooded rooms come with everything you could possibly need for
             a comfortable stay. And yes comfort isn’t our only objective,
              we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible
               from our rooms’ sea-view windows and terraces"
        title="Rooms"
      />
      <RoContents />
      <Testimonial />
    </div>
  );
}

export default Rooms;
