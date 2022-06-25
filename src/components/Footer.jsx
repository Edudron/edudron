import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          
          <p>
            Who We Are Datagami is a new age digital technology, consulting and
            effective business process management service company.
          </p>
        </div>
        <div className="col">
        <h3>Office <div className="underline"> <span></span></div></h3>
        <p>Datagami</p>
        <p>
          6th Floor, “A” wing, HDIL Kaledonia Business Park, Sahar Road, Andheri
          (East), Mumbai 400069.
        </p>
        <p className="emailID">sales@datagami.in</p>
        <p> +91 22 6848 8300</p>
        </div>
        <div className="col">
        <h3>Links <div className="underline"> <span></span></div></h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"> <span></span></div></h3>
          <form >
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required/>
            <button type="box"><i className="fas fa-arrow-right"></i></button>
          </form>
          <div className="social-media">
          <i >Facebook</i>
          <i >Instagram</i>
          <i >Twitter</i>
          </div>
        </div>
        </div>
        <div>
        <hr/>
        </div>
        <p className="copyright">Edu-Dron © 2022 -All Rights Reserved </p>
        
    </footer>
  );
}
