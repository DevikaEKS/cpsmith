import React from 'react';
import "./Newproducts.css";
import im1 from "../../Asset/product10_1_1_2.jpg.png";
import im2 from "../../Asset/product7_1_1_1_1.jpg.png";
import im3 from "../../Asset/product12_1_1_1_1.jpg.png";
import im4 from "../../Asset/pro3.png";

function Newproducts() {
  return (
    <div className='container-fluid text-center'>
      <h1 className='prdheading text-center my-4'>New Products</h1>
      <div className='row my-5 py-5 productbox'>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={im1} className='newbrd' alt="Stylish Full Sleeves top" />
          <p className='prdname'>Stylish Full Sleeves Top</p>
          <p className='cost'>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={im3} className='newbrd' alt="Stylish Full Sleeves top" />
          <p>Stylish Full Sleeves Top</p>
          <p>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={im4} className='newbrd' alt="Stylish Full Sleeves top" />
          <p>Stylish Full Sleeves Top</p>
          <p>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={im2} className='newbrd' alt="Stylish Full Sleeves top" />
          <p>Stylish Full Sleeves Top</p>
          <p>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Newproducts;
