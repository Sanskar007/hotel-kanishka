import React, { forwardRef, useId, useRef } from 'react';
import Button from './Button';
import hero1 from '../images/hero1.png';
import HorizontalRule from './HorizontalRule';

function Hero(props, ref) {

  return (
    <div id = 'heroDivID' className='hero' ref={ref}>

      <div className='heroText'>
        <p style={{margin:"0.5rem"}}>Kanishka Residency</p>
        <div className='heroButtons'>

          <Button 
            name={'Book My Stay Now'} 
            clickEvent={props.roomClick} 
          />

          <Button 
            name={'Take a Tour'} 
            clickEvent={props.contactClick} 
          />

        </div>
      </div>


      <div className='heroCaption'>
        {/* <div className='hr'>-----------</div>   */}
        <p style={{fontSize:"1.5rem"}}>The</p>
        <p style={{fontSize:"2.4rem"}}>Ideal & Afforfable</p>
        <p style={{fontSize:"1.5rem"}}>stay in</p>
        <p style={{fontSize:"2.4rem"}}>Jabalpur</p>
        
      </div>

    </div>
  )
}

export default forwardRef(Hero);