import React, { forwardRef } from 'react';
import HorizontalRule from './HorizontalRule.jsx';
import ItemCard from './ItemCard.jsx';
import reviews from './reviews.js';

function Testimonials(props, ref) {

  return (
    <div className='testimonials-layout' ref={ref}>

      <div className='testimonial-title'>
      <p style={{fontWeight:500, margin:0}}>Testimonials</p>
      <p style={{fontSize:'1.3rem'}}> See what our customers say: </p>
      </div>
      
      <HorizontalRule />
      
      <div className='cardFlex'>
        {
          reviews.map( review => {
            return(
              <ItemCard
                key={review.key}
                image={review.image}
                name={review.name}
                text={review.text}
                rating={review.rating}
              />
            )
          } )
        }
      </div>
      

  </div>
  )
}

export default forwardRef(Testimonials);