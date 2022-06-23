import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
  return (
    <section>
    <nav>
    <div className='logo'>Edu-Dron</div>
    <input type="checkbox" id="click"/>
    <label for="click" class="menu-btn">
      <i className='fas fa-bars'></i>
    </label>
    <ul>
      <li><a className='active' href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact Us</a></li>
      <li className='login'><a href="#">Login</a></li>
    </ul>
  </nav>

  </section>

    )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
} 

Navbar.defaultProps = {
  title: 'EduDron'
  
};
