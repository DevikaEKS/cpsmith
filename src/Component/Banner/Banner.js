// import React from 'react'
// import "./Banner.css";
// function Banner() {
//   return (
//     <div className='container-fluid bannerparts'>
//         <div className='row'>
//         <div className='col-7'></div>
//         <div className='col-6 mt-5 pt-5'>
//         <h4>MEGA STORE</h4>
// <h1 className='bannerheading'>TRENDING <br/> FASHION LOOK</h1>
// <p>New Clothes, New Passion</p>
// <button className='SHOPBTN'>SHOP TODAY</button>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Banner



import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='container-fluid bannerparts'>
      <div className='row justify-content-end align-items-center'>
        <div className='col-lg-6 col-12 textstart'>
          <h4 className='megatext'>MEGA STORE</h4>
          <h1 className='bannerheading'>TRENDING <br /> FASHION LOOK</h1>
          <p>New Clothes, New Passion</p>
          <button className='SHOPBTN'>SHOP TODAY</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
