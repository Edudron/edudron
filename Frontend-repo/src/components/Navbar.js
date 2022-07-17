import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import Login from './loginpage/Login';
// import Signup from './loginpage/Signup';
// import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
  return (
    <header>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">Edu<strong>Dron</strong></a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar-content">
                <i class="fas fa-stream text-light"></i>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="about"
        >About</Link
      >
    </li>
    <li class="nav-item dropdown dropdown-mega position-static">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        >Colleges </a
      >
      <div class="dropdown-menu shadow" >
        <div class="mega-content px-md-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5> Top Ranked Colleges</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Top IITs in India</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Top NITs in India</a
                  >
                  <a class="list-group-item" id="colorss" href="#">Top Private Engineering Colleges in India</a>
                  <a class="list-group-item" id="colorss" href="#">Top Private Medical Colleges in India</a>
                  <a class="list-group-item" id="colorss" href="#">Top Govt. Medical Colleges in India</a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>College by Location</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Engineering Colleges in Delhi</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Engineering Colleges in Mumbai</a
                  >
                  <a class="list-group-item"  id="colorss" href="#">Engineering Colleges in Pune</a>
                  <a class="list-group-item" id="colorss"  href="#">Engineering Colleges in Chennai</a>
                  <a class="list-group-item" id="colorss"  href="#">Engineering Colleges in Bangalore</a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Popular Courses</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >B.E/B.Tech</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >M.E/M.Tech</a
                  >
                  <a class="list-group-item" id="colorss" href="#">Ph.D</a>
                  <a class="list-group-item" id="colorss" href="#">Diploma Courses</a>
                  <a class="list-group-item" id="colorss" href="#">Other Courses </a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Popular Exams</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >JEE MAIN</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >JEE ADVANCED</a
                  >
                  <a class="list-group-item" id="colorss" href="#">GATE</a>
                  <a class="list-group-item" id="colorss" href="#">WBJEE</a>
                  <a class="list-group-item" id="colorss" href="#">BITSAT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="nav-item dropdown dropdown-mega position-static">
      <a
        class="nav-link dropdown-toggle" 
        href="#"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        >Services </a
      >
      <div class="dropdown-menu shadow">
        <div class="mega-content px-md-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Courses</h5>
                <div class="list-group">
                  <a class="list-group-item" 
                  id="colorss" href="#"
                    >Machine Learining</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Data Science</a
                  >
                  <a class="list-group-item" id="colorss" href="#">Cyber Security</a>
                  <a class="list-group-item" id="colorss" href="#">Data Structure & Algo</a>
                  <a class="list-group-item" id="colorss" href="#">Computer Networks</a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Subscription</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#" id="colorss"
                    >Sliver</a
                  >
                  <a class="list-group-item" href="#" id="colorss"
                    >Gold</a
                  >
                  <a class="list-group-item" id="colorss" href="#">Platinum</a>
                  <a class="list-group-item" id="colorss" href="#"></a>
                  <a class="list-group-item" id="colorss" href="#"></a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Study Abroad</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >United states</a
                  >
                  <a class="list-group-item" href="#"
                  id="colorss"
                    >Australia</a
                  >
                  <a class="list-group-item" id="colorss" href="#">United Kingdom</a>
                  <a class="list-group-item" id="colorss" href="#">Germany</a>
                  <a class="list-group-item" id="colorss" href="#">Russia</a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                <h5>Service</h5>
                <div class="list-group">
                  <a class="list-group-item" href="#" id="colorss"
                    >Accomodations</a
                  >
                  <a class="list-group-item" href="#" id="colorss"
                    >Terms & Conditions</a
                  >
                  <a class="list-group-item" id="colorss" href="#">Privacy</a>
                  <a class="list-group-item" id="colorss" href="#"></a>
                  <a class="list-group-item" id="colorss" href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="nav-item ">
      <Link
        class="nav-link active"
        to="/contactus"
        tabindex="-1"
        aria-disabled="true"
        >Contact Us</Link>
    </li>
  </ul>
  <nn class="Login-signup">
  <Link to="/login">
  <button id="login">
    Login
    
  </button>
  </Link>
  <Link to="/signup">
  <button id="sign-up">Sign Up</button>
  </Link>
</nn>
</div>
</div>
</nav>
</header>
    )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
} 

Navbar.defaultProps = {
  title: 'EduDron'
  
};
