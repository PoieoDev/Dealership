import React from 'react';
import Cimg from './cimg.jpg'


function Contact() {
  return (
    <div className="container">
    <div className="topnav">

    <div className="row2 col4 cspan6 cimg">
         <img src={Cimg} className="cimg"/>
    </div>

    <h1>Contact us!</h1>
    <label for="fullname">Full Name</label>
    <input type="text" id="fullname" name="fullname" placeholder="Your fullname.."/>

    <label for="Email">Email</label>
    <input type="text" id="Email" name="Email" placeholder="Your email.."/>

    <label for="Message">Message</label>
    <input type="text" id="Message" name="Message" placeholder="Your message.."/>

</div>
</div>



  );
}

export default Contact;
