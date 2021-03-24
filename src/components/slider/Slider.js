import './style.css';
import small from './small.png';
import scroll from './scroll.png';

function Slider() {
  return (
    <div>
      <div className="con">
        <img src={small} className="logo" alt="logo" />
        <h3 className="text">LUXURY</h3>
        <span className="smalltext">HOTELS</span>
      </div>

      <div className="centerText">WELCOME TO</div>
      <div className="centerText2">LUXURY</div>
      <div className="centerText3">HOTELS</div>
      <div className="centerText4">
        <p>
          Book your stay and enjoy Luxury
          <br />
          redefined at the most affordable rates.{' '}
        </p>
      </div>

      <button className="btn button" type="submit">
        <i className="fa fa-home" aria-hidden="true"></i>
        BOOK NOW
      </button>

      <div className="scroll">
        <span>Scroll</span>
      </div>

      <div>
        <img src={scroll} className="scrollImg" alt="scroll" />
      </div>
    </div>
  );
}

export default Slider;
