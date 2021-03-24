import Arrow from './Arrow.png';
import './style.css';

function Contact() {
  return (
    <div>
      <div className="contact_title">
        <h3>WE ARE HERE FOR YOU</h3>
        <p>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, complaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="row ">
        <div className="col-6">
          <p className="details">497 Evergreen Rd. Roseville, CA 95673</p>
          <span className="map">View map</span>
          <img src={Arrow} className="arrow" alt="arrow" />
          <p className="details2">
            Phone: +44 345 678 903 Email: luxury_hotels@gmail.com
          </p>
        </div>

        <div className="col-6">
          <form className="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" />
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>

            <button type="submit" class="btn  sub">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
