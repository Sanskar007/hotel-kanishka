import React, { forwardRef } from 'react';
import { FaPhoneAlt, FaAngleUp } from "react-icons/fa";

function Book(props) {
  return (
    <div>
      <div className='testimonial-title'>

        <p style={{
          fontWeight:500, 
          marginBottom:'30px', 
          paddingTop:'0rem'
          }}>Book our {props.room} Room </p>

        <p style={{fontSize:'1.2rem'}}>
         To book this room, call on the number below to check its availability: 
        </p>

        <button 
          className='callButton'
          onClick={()=>{window.location.href='tel:9755373201'}}
        > 
          <div className='buttonDiv'>

          <FaPhoneAlt className='phoneIcon'/>
          <FaPhoneAlt className='phoneS'/>
          Book Now

          </div>
        </button>

        <p style={{
          fontSize:'0.9rem',
          marginTop:'20px',
          marginBottom:'40px'
          }}>
         *In case our lines are busy, you will recive a callback from our operator soon.
         <br />
         **The prices may increase depending on number of people.
        </p>

      </div>

      <div 
        className='hoverAnimation'
        onClick={props.clickEvent}
      >
        <FaAngleUp />
      </div>

    </div>
  )
}

export default Book;
// export default forwardRef(Book);
