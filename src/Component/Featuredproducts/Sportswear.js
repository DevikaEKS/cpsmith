import React from 'react'
import sport1 from  "../../Asset/Group 193.png";
import sport2 from "../../Asset/Group 194.png";

function Sportswear() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col my-3'>
            <img src={sport1} className='img-fluid'/>
            </div>
            <div className='col my-3'>
            <img src={sport2} className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Sportswear