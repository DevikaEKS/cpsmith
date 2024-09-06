import React, { useState } from 'react';
import "./Individualdress.css";
import Singlecard from '../Singlecard/Singlecard';

function Individualdress() {
  const [value, setValue] = useState(0); // Initial state set to 0
  const [selectedTab, setSelectedTab] = useState('details'); // State to track the selected tab

  // Function to handle increment
  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0)); // Prevent negative values
  };

  // Function to handle direct input changes
  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);
    if (inputValue >= 0) {
      setValue(inputValue);
    }
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='container-container'>
      <div className='row my-5'>
        <div className='col-sm-12 col-lg-6 pb-5'>
          <Singlecard/>
        </div>
        <div className='col-sm-12 col-lg-6 pt-5'>
          <h1 className='sportshead'>WOMEN'S BLUE GYM/SPORTS WEAR</h1>
          <p>Be the first to review this product</p>
          <div className='d-flex'>
            <h3>Rs.300.00</h3>
            <button className='grnbtn mx-3'>IN STOCK</button>
          </div>
          <hr />

          <p>Qty</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='border-part'>
            <div className='bg-info d-flex my-3'>
              <input
                type='text'
                value={value}
                onChange={handleInputChange}
                style={{ textAlign: 'center', width: '50px' }}
              />

              {/* Increment and Decrement Buttons */}
              <div className='d-flex flex-column'>
                <button onClick={handleDecrement} style={{ padding: '5px 10px', cursor: 'pointer' }} className='borderpart'>-</button>
                <button onClick={handleIncrement} style={{ padding: '5px 10px', cursor: 'pointer' }} className='borderpart'>+</button>
              </div>
            </div>
            <button className='addbtn mx-3 p-3'>ADD TO CART</button>
          </div>

          {/* Overview Section */}
          <p>OVERVIEW</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul>
            <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
            <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
          </ul>
        </div>
      </div>

      {/* Tab Section */}
      <div className='row card mx-4 rounded-0 my-3'>
        <div className='d-flex'>
          {/* Tabs */}
          <p
            className={`mx-2 p-3 ${selectedTab === 'details' ? 'active-tab' : ''}`} 
            onClick={() => handleTabClick('details')}
          >
            Details
          </p>
          <p
            className={`mx-2 p-3 ${selectedTab === 'reviews' ? 'active-tab' : ''}`} 
            onClick={() => handleTabClick('reviews')}
          >
            Reviews
          </p>
        </div>

        {/* Conditionally Rendered Content */}
        <div className='p-3'>
          {selectedTab === 'details' && (
            <div>
              <h4>Product Details</h4>
              <p>Here are the details of the product...</p>
            </div>
          )}
          {selectedTab === 'reviews' && (
            <div>
              <h4>Customer Reviews</h4>
              <p>Read what our customers have to say...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Individualdress;
