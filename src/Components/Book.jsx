import React from 'react';
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

        {/* <p>This is example to use whatsapp custom text message</p>
        <a href="https://wa.me/15551234567"></a>
        `Hello, ${name}!` */}

        <button 
          className='callButton'
          // onClick={()=>{window.location.href='tel:9755373201'}}
          onClick={()=>{window.location.href=`https://wa.me/9131011608?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${props.room}%20room%20and%20check%20its%20availability`}}
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
