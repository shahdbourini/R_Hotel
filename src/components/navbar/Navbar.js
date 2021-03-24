import './style.css';
import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';

function Navbar() {
  let history = useHistory();

  return (
    <div>
      <BrowserRouter>
        <div className="topnav">
          <NavLink onClick={() => history.push("/R_Hotel")} to="/R_Hotel" activeClassName="is-active">
            Home
          </NavLink>
          <NavLink onClick={() => history.push("/Facilities")} to="/Facilities" activeClassName="is-active">
            Facilities
          </NavLink>
          <NavLink onClick={() => history.push("/Rooms")} to="/Rooms" activeClassName="is-active">
            Rooms
          </NavLink>
          <NavLink onClick={() => history.push("/ContactUs")} to="/ContactUs" activeClassName="is-active">
            Contact-us
          </NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
