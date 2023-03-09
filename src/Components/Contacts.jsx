import React, { forwardRef } from 'react';
import HorizontalRule from './HorizontalRule';
import { FaInstagram, FaFacebookSquare, FaWhatsapp} from 'react-icons/fa';
import bigMap from '../images/bigMap.png';

function Contacts( props, ref ) {

  return (
    <div className='contacts-div' ref={ref}>
      
      <img className='background-image' src={bigMap} />

      <HorizontalRule />

      <div className='testimonial-title'>
        
        <p style={{fontWeight:500, margin:0, paddingTop:'3rem'}}>Contact Us</p>
        <p style={{fontSize:'1.3rem'}}> Many ways to get in touch: </p>
      </div>

      <div className='contacts-section'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.5074059787185!2d79.90963254967878!3d23.1516739848137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3b8baf2581f%3A0x2596e506b4220c2d!2sHotel%20kanishka%20residency%20jabalpur!5e0!3m2!1sen!2sin!4v1678121159913!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe>

        <div className='contacts-details'>

          <p style={{fontWeight:500, margin:0, fontSize:'1.7rem'}}>Hotel Kanishka Residency</p>
          <p style={{fontSize:'1.1rem', margin:0}}>Plot No. 71 Bharat Colony Besides Annapurna Apartment</p>
          <p style={{fontSize:'1.1rem', margin:0}}>Near LIC regional office Madan Mahal, Jabalpur</p>

          <p style={{fontWeight:500, margin:0, marginTop:'1rem', fontSize:'1.7rem'}}>Mail</p>
          <p style={{fontSize:'1.1rem', margin:0}}>
            <a href='mailto: hotelkanishkaresidency@gmail.com'>hotelkanishkaresidency@gmail.com
            </a>
          </p>

          <p style={{fontWeight:500, margin:0, marginTop:'1rem', fontSize:'1.7rem'}}>Phone</p>
          <p style={{fontSize:'1.1rem', margin:0}}>
            <a href='tel: +919755373201'>
              +91-9755373201
            </a>
          </p>
          <p style={{fontSize:'1.1rem', margin:0}}>
          <a href='tel: +917614081430'>
            +91-7614081430
          </a>
          </p>

        </div>

      </div>

      <div style={{
        display:'flex',
        justifyContent:'space-evenly',
        width:'160px',
        margin:'auto',
        fontSize:25
      }}>
      ---
        <FaInstagram />
        <FaFacebookSquare />
        <FaWhatsapp />
      ---
      </div>
      
    </div>
  )
}

export default forwardRef(Contacts);