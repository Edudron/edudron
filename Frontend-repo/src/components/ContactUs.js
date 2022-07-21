import React from "react";
import "../PageCss/contactus.css";
function ContactUs() {
  return (
    <div className="backgroundcontactus">
      <div className="contactus">
        <div className="title">
          {/* <h2 >Get in Touch </h2> */}
        </div>
        <div className="box">
          {/* form */}
          <div className="contact form">
            <h3>Send a Message</h3>
            <form>
              <div className="formbox">
                <div className="row50">
                  <div className="inputbox">
                    <span>First Name</span>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="inputbox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputbox">
                    <span>Email</span>
                    <input type="text" placeholder="abcd@gmail.com" />
                  </div>
                  <div className="inputbox">
                    <span>Mobile No.</span>
                    <input type="text" placeholder="+91 123 456 7890" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputbox">
                    <span>Message</span>
                    <textarea placeholder="Write your message...."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputbox">
                    <input type="submit" value="send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="contact info">
            <h3>Contact Info</h3>

            <div className="infobox">
              <div>
                <span>
                  <ion-icon name="location-sharp"></ion-icon>
                </span>

                <p>
                  6th Floor, “A” wing, HDIL Kaledonia Business Park Sahar Road,
                  Andheri (East), Mumbai 400069.
                </p>
              </div>
            </div>
            <div className="infobox">
              <div>
                <span>
                  <ion-icon name="mail-sharp"></ion-icon>
                </span>

                <a href="#">sales@gatagami.com</a>
              </div>
            </div>
            <div className="infobox">
              <div>
                <span>
                  <ion-icon name="call-sharp"></ion-icon>
                </span>

                <a href="#">+91 22 6848 8300</a>
              </div>
            </div>

            {/* Social media Links */}
            <ul className="social">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          {/* map */}
          <div className="contact map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.728611940114!2d72.83814916977539!3d19.1136079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c856a7d54355%3A0x6a88c38386e7f251!2sDatagami!5e0!3m2!1sen!2sin!4v1658403132972!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
