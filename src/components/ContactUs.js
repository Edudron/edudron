import React from "react";
import '../PageCss/contactus.css';
const ContactUs =() =>{
    return( 
    <div class="containercontact">
    <div class="contact-box">
        <div class="left"></div>
        <div class="right">
            <h2>Contact Us</h2>
            <input type="text" class="field" placeholder="Name"/>
            <input type="text" class="field" placeholder=" Email"/>
            <input type="text" class="field" placeholder=" Phone No."/>
            <textarea placeholder="Message" class="field"></textarea>
            <button class="btn">Send</button>
        </div>
    </div>
</div>)
}
export default ContactUs;