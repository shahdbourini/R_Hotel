import Contact from '../components/contact/Contact';
import Navbar from '../components/navbar/Navbar';
import img4 from '../img4.png';
import small from '../components/slider/small.png';


function Contact_us() {
  return (
    <div>
      <div
              className="image_Contact"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="container">
                <Navbar />
              </div>

              <div className="con">
                <img src={small} className="logo" alt="logo" />
                <h3 className="text">LUXURY</h3>
                <span className="smalltext">HOTELS</span>
              </div>
              <h3 className="text_Contact">CONTACT-US</h3>
            </div>
            <Contact />
    </div>
  );
}

export default Contact_us;
