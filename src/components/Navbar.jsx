import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
  return (
    <header>
    <nav>
    <input id="nav-toggle" type="checkbox"/>
    <div class="logo">Edu<strong>Dron</strong></div>
    <ul class="links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a>
      <div class='sub-nav'>
        <ul>
        <li><a href="#">Nikhil</a></li>
        <li><a href="#">Nikhil</a></li>
        <li><a href="#">Nikhil</a></li>
        <li><a href="#">Nikhil</a></li>
        </ul>
      </div>
      </li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#Contact Us">Contact Us</a></li>
      <button id="login" href="#Login">Login</button>
      <button id='sign-up' href="#Login">Sign Up</button>
    </ul>
    
    
    <label for="nav-toggle" class="icon-burger">
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
