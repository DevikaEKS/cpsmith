// import React from 'react';
// import "./Featuredproducts.css";
// import im1 from "../../Asset/product3_1_1_2.jpg (1).png";
// import im2 from "../../Asset/product10_1_1_2.jpg (1).png";
// import im3 from "../../Asset/product12_1_1_1_1.jpg (1).png";
// import im4 from "../../Asset/product7_1_1_1_1.jpg (1).png";

// function Featuredproducts() {
//   return (
//     <div className='container-fluid text-center'>
//       <h1 className='prdheading text-center my-4'>Featured Products</h1>
//       <div className='row my-5 py-5 productbox'>
//         <div className='col-6 col-lg-3 mb-4 text-light'>
//           <img src={im1} className='newbrd' alt="Stylish Full Sleeves top" />
//           <p className='prdname'>Stylish Full Sleeves Top</p>
//           <p className='cost'>Rs.839</p>
//           <button className='ADDBTN'>ADD TO CART</button>
//         </div>
//         <div className='col-6 col-lg-3 mb-4 text-light'>
//           <img src={im3} className='newbrd' alt="Stylish Full Sleeves top" />
//           <p>Stylish Full Sleeves Top</p>
//           <p>Rs.999</p>
//           <button className='ADDBTN'>ADD TO CART</button>
//         </div>
//         <div className='col-6 col-lg-3 mb-4 text-light'>
//           <img src={im4} className='newbrd' alt="Stylish Full Sleeves top" />
//           <p>Stylish Full Sleeves Top</p>
//           <p>Rs.389</p>
//           <button className='ADDBTN'>ADD TO CART</button>
//         </div>
//         <div className='col-6 col-lg-3 mb-4 text-light'>
//           <img src={im2} className='newbrd' alt="Stylish Full Sleeves top" />
//           <p>Stylish Full Sleeves Top</p>
//           <p>Rs.439</p>
//           <button className='ADDBTN'>ADD TO CART</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featuredproducts;

import React from "react";
import "./Featuredproducts.css";
import products from "./FeaturedProducts.json";
import { Link } from "react-router-dom";

function Featuredproducts() {
  return (
    <div className="container-fluid text-center">
      <h1 className="prdheading text-center my-4">Featured Products</h1>
      <div className="row my-5 py-5 productbox">
        {products.map((e) => (
          <Link to={  `/detailfeaproduct/${e.id}`}>
            <div className="col-6 col-lg-3 mb-4 text-light">
              <img src={e.image[0]} alt="Stylish Full Sleeves top" />
              <p className="prdname">{e.name}</p>
              <p className="cost">Rs.{e.price}</p>
              <button className="ADDBTN">ADD TO CART</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Featuredproducts