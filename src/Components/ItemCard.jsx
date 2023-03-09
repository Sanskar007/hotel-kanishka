import React from 'react';
import Rating from 'react-star-rating-lite';

export default function ItemCard(props) {
  return (
    <div className='itemCard'>

      <img src={props.image} alt="" />

      <p className='itemName'> {props.name} </p>

      <div className='cardRating'>
          <Rating 
            value="5" 
            weight="20" 
            readonly
          />
      </div>

      <div className="bottomSection">
        <div className="itemPrice">
              <p className='priceTag'>{props.text}</p>
        </div>
      </div>

    </div>
  )
}
