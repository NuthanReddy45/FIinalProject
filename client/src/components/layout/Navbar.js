import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link style={{ textDecoration: "none" }} to="/acts">
          Acts
        </Link>
      </li>

      <li>
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/aboutUs">
          AboutUs
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/FAQs">
          FAQs
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/help">
          Help
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/careers">
          Careers
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/contactUs">
          Contact Us
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link style={{ textDecoration: "none" }} to="/">
          <i className="fas fa-user" /> ELabourDelhi
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
// import react,{Fragment} from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../actions/auth';

// const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

//     const authLinks = (
//         <ul>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/profiles">Developers</Link>
//             </li>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/posts">Posts</Link>
//             </li>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/dashboard">
//                     <i className="fas fa-user" />{' '}
//                     <span className="hide-sm">Dashboard</span>
//                 </Link>
//             </li>
//             <li>
//                 <a onClick={logout} href="#!">
//                     <i className="fas fa-sign-out-alt" />{' '}
//                     <span className="hide-sm">Logout</span>
//                 </a>
//             </li>
//         </ul>
//     );

//     const guestLinks = (
//         <ul>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/profiles">Developers</Link>
//             </li>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/register">Register</Link>
//             </li>
//             <li>
//                 <Link style={{textDecoration:"none"}} to="/login">Login</Link>
//             </li>
//         </ul>
//     );

//     return (

//         <nav className="navbar bg-dark">
//             <h1>
//                 <Link style={{textDecoration:"none"}} to="/dashboard"> <i className="fas fa-code"></i> DevConnector </Link>
//             </h1>
//             <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
//         </nav>
//     );

// };
// Navbar.propTypes = {
//     logout: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//     auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Navbar);
