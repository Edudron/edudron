import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
  return (
    <header>
    <nav>
    <input id="nav-toggle" type="checkbox"/>
    <div class="logo">Edu<strong>Dron</strong></div>
    <ul class="links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About</Link></li>

      <li><a href="#about">Colleges</a>
        <div class='sub-nav'>
        <ul>
        <li className='Hover-sub-nav'> <a href="#">Stream</a>
        <div className='sub-nav-2'>
          <ul>
            <li><a href="">Management</a></li>
            <li><a href="">Engineering</a></li>
            <li><a href="">Pharmacy</a></li>
            <li><a href="">Law</a></li>
            <li><a href="">More</a></li>
          </ul>
        </div>
        </li>
        <li className='Hover-sub-nav'><a href="#">State</a>
        <div className='sub-nav-2'>
          <ul>
            <li><Link to="">North State</Link></li>
            <li><Link to="">South State</Link></li>
            <li><Link to="">North East State</Link></li>
            <li><Link to="">North West State</Link></li>
          </ul>
        </div></li>

        <li className='Hover-sub-nav'><a href="#">Courses</a>
        <div className='sub-nav-2'>
          <ul>
            <li><a href="">Programming</a></li>
            <li><a href="">Maching learning</a></li>
            <li><a href="">Data Science</a></li>
            <li><a href="">Cyber Security</a></li>
            <li><a href=""></a></li>
          </ul>
        </div></li>
      </ul>
      </div></li>

      <li><a href="#Services">Services</a>
      <div class='sub-nav'>
        <ul>
        <li><a href="#">Our Courses</a></li>
        <li><a href="#">counselling</a></li>
        <li><a href="#">Mentorship</a></li>
        <li><a href="#">Training</a></li>
        <li><a href="#">Intership</a></li>
        <li><a href="#">Study Abroad</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">More...</a></li>
        </ul>
      </div></li>
      <li><a href="#Contact Us">Contact Us</a></li>
      <button id="login" href="#Login">Login</button>
      <button id='sign-up' href="#Login">Sign Up</button>
    </ul>
    
    
    <label for="nav-toggle" className="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
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
