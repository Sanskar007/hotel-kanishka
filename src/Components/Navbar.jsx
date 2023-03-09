import React from 'react';

export default function Navbar(props) {

  return (
    <div className='nav'>
      <div id='LogoDiv' className='navDiv'>
        <div onClick={props.heroClick}>Home</div>
      </div>
      <div className='navDiv'>
        <div onClick={props.testimonialClick}>Reviews</div>
        <div onClick={props.roomClick}>Rooms</div> 
        <div onClick={props.contactClick}>Contact Us</div> 
      </div>
    </div>
  )
}
