import React, { forwardRef } from 'react';
import HorizontalRule from './HorizontalRule.jsx';
import ItemCard from './ItemCard.jsx';
import reviews from './reviews.js';

function Testimonials(props, ref) {

  return (
    <div className='testimonials-layout' ref={ref}>

      <div className='testimonial-title'>
      <p style={{fontWeight:500, margin:0}}>Testimonials</p>
      <p style={{fontSize:'1.3rem'}}> 
        <a href='https://www.google.com/travel/hotels/kanishka%20residency%20jabalpur/entity/CgsIk4Wj9fy-oP6lARAB/reviews?q=kanishka%20residency%20jabalpur&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4306835%2C4429192%2C4515404%2C4731329%2C4757164%2C4778035%2C4814050%2C4861688%2C4864715%2C4867855%2C4874190%2C4886082%2C4886480%2C4893075%2C4902277%2C4906023%2C4920132%2C4924069%2C4926165%2C4926489%2C4936396%2C4955104%2C4955435%2C4958830%2C4961150%2C4965727%2C4965990%2C4967668%2C4967669%2C4968225%2C4968228&hl=en-IN&gl=in&cs=1&ssta=1&rp=EJOFo_X8vqD-pQEQk4Wj9fy-oP6lATgCQABIAcABApoCAggA&ictx=1&ved=0CAAQ5JsGahcKEwjY-M-Esr_9AhUAAAAAHQAAAAAQBQ&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABogCgIaABIaEhQKBwjnDxADGAQSBwjnDxADGAUYATICEAAqBAoAGgA'>See what our customers say:
        </a>
      </p>
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