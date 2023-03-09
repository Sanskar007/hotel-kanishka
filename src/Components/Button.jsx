import React from 'react';

export default function Button(props) {

  return (
    <div>
      <button 
        className='heroButton' 
        onClick={props.clickEvent}
      >{props.name}</button>
    </div>
  )
}
