import React from 'react';
import "./Relatedproducts.css";
import img1 from "../../Asset/Roseate.png";
import img2 from "../../Asset/Sunglow.png";
import img3 from "../../Asset/Periwinkle.png";
import img4 from "../../Asset/marine Blue.png";

function Relatedproducts() {
  return (
    <div className='container-fluid text-center'>
      <h1 className='prdheading text-center my-4'>Related Products</h1>
      <div className='row my-5 py-5 '>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={img1} className='newbrd1' alt="Stylish Full Sleeves top" />
          <p className='prdname'>Stylish Full Sleeves Top</p>
          <p className='cost'>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={img3} className='newbrd1' alt="Stylish Full Sleeves top" />
          <p className='prdname'>Stylish Full Sleeves Top</p>
          <p className='cost'>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={img4} className='newbrd1' alt="Stylish Full Sleeves top" />
          <p className='prdname'>Stylish Full Sleeves Top</p>
          <p className='cost'>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
        <div className='col-6 col-lg-3 mb-4 text-light'>
          <img src={img2} className='newbrd1' alt="Stylish Full Sleeves top" />
          <p className='prdname'>Stylish Full Sleeves Top</p>
          <p className='cost'>Rs.339</p>
          <button className='ADDBTN'>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Relatedproducts;
