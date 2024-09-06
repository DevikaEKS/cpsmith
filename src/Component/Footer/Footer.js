import React from 'react'
import "./Footer.css"
import copperlogo from "../../Asset/Logo White 1.png";
function Footer() {
  return (
    <div className='container-fluid footerpart'>
        <div className='row py-5 text-light'>
            <div className='col'>
                <img src={copperlogo} className='py-3'/>
<p>265, Lorem Street, New York, 32456,
United States</p>
<p>Phone: +1 234 567 8901</p>
<p>Email: info@yourdomain.com</p>
            </div>

            <div className='col'>
               <p className='footpara'>Quick Links</p> 
               <p>Privacy and Cookie Policy</p>
               <p>Search Terms</p>
               <p>Contact Us</p>
               <p>Orders and Returns</p>
               <p>Advanced Search</p>
            </div>

            <div className='col'>
               <p className='footpara'>My Account</p>
               <p>My Account</p>
               <p>Login</p>
               <p>My Cart</p>
               <p>My Compare</p>
               <p>My Wishlist</p>
            </div>

            <div className='col'>
               <p className='footpara'>GET IN TOUCH</p>
               <p>Subscribe to our newsletter to get exclusive
               discounts.</p> 
               <div className='d-flex contactbox'>
                <input type='text' className='inputbox' placeholder='Enter your Email Address'/>
                <button className='text-light subbtn'>Subscribe</button>
               </div>
            </div>
            
        </div>
       <p className='text-center text-light py-3'>Copyright 2024 CopperSmith. All rights reserved.</p> 
    </div>
  )
}

export default Footer