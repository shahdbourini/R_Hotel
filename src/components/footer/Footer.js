import './style.css';

function Footer() {
  return (
    <div>
      <div className="row text-center footer ">
        <div className="col-xs-12 col-sm-6 col-md-3 footer-column">
          <div className="block-center">
            <p className="ti">LUXURY </p>
            <span className="fi">HOTELS</span>
            <p className="block par ">
              497 Evergreen Rd. Rockville, CA 95673
              <br />
              +44 345 678 903 <br />
              luxury_hotels@gmail.com
            </p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 footer-column">
          <div className="block-center">
            <p>about us</p>
            <p>contact</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 footer-column">
          <div className="block-center">
            <ul>
              <li>
                <p>
                  <i class="fa fa-facebook social" aria-hidden="true"></i>{' '}
                  FaceBook
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  <i class="fa fa-twitter social" aria-hidden="true"></i>{' '}
                  Twitter
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  <i class="fa fa-instagram social" aria-hidden="true"></i>{' '}
                  Instagram{' '}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="block-center">
            <p className="mail-text saleprice">Subscribe to our newsletter</p>
            <input type="text" placeholder="Email address" />
            <button className="btn ok" type="submit">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
