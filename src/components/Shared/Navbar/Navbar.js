import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {

  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser.email)
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid pr-4 pl-4">
      <Link className="navbar-brand logo" to="/"><img src={logo} alt="" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active ">
            <Link className="nav-link mr-3" to="/home">Home <span className="sr-only">(current)</span></Link>
          </li>


          <li className="nav-item active">
            <Link className="nav-link mr-3" to="#"> Our Team </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link mr-3" to="#"> Our Portfolio </Link>
          </li>


          <li className="nav-item active">
            <Link className="nav-link mr-3" to="#"> Contact Us </Link>
          </li>

          {

            !loggedInUser.email? false : true  && loggedInUser.adminEmail ?
              <li className="nav-item active">
                <Link className="nav-link mr-3" to="/admin"> Admin </Link>
              </li> :
              <li className="nav-item active">
                <Link className="nav-link mr-3" to="/orderList"> Order </Link>
              </li>
          }

          {

            !loggedInUser.email &&
            <li className="nav-item active">
              <Link className="nav-link mr-3 button-primary " to="/login"> Login </Link>
            </li>
          }



          {/* <li className="nav-item active">
        <Link className="nav-link mr-3 button-primary" to="/admin"> Admin </Link>
      </li> */}

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;