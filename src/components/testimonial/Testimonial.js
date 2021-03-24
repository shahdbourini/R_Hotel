import './style.css';
import left from './left.png';
import right from './right.png';
import for_arrow from './for_arrow.png';

function Testimonial() {
  return (
    <div>
      <div className="titleTest">
        <p>Testimonials</p>
      </div>

      <div>
        <p className="testPar">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p className="testPar2"> Mr. and Mrs. Baxter, UK</p>
        <div className="parent">
          <img src={left} className="left_arrow" alt="arrow" />
          <img src={right} className="right_arrow" alt="arrow" />
          <img src={for_arrow} className="for_arrow" alt="arrow" />
          <img src={for_arrow} className="for_arrow2" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
