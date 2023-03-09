import React, { forwardRef, useState } from 'react';
import Button from "./Button.jsx";
import Book from './Book.jsx'
import Img3 from '../images/img3.png';
import Img4 from '../images/img4.png';
import Img1 from '../images/img1.png';

function Rooms( props, ref ) {

  const [roomType, setroomType] = useState("default");
  const [isActive, setActive] = useState(false);


  function scrollToDiv() {
    const ele = document.getElementById("BookID");
    ele.scrollIntoView();
  }

  return (
    <div id = 'roomsDivID' ref={ref} className='roomsLayout'>

    <img className='background-image' src={Img3} alt='' />

      <p style={{
        fontWeight:500, 
        marginTop:'4rem', 
        marginBottom:0,
        fontSize: '2rem'
      }}>Rooms</p>

      <p style={{fontSize:'1.3rem', marginBottom:'2rem'}}> Rooms according to your needs: </p>

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img className="d-block w-100" src={Img1} alt="Third slide" />
          <div className="carousel-caption ">

            <p style={{
                margin: 0, 
                fontSize: '3rem'
              }}>The Premium</p>

            <p style={{
              margin: 0, marginBottom: '1rem', 
              marginLeft: '0.5rem', 
              fontSize: '1.5rem'
              }}>Premium rooms starting at ₹2500</p>

            <Button 
              name={'Book this'} 
              clickEvent={()=>{
                setroomType("Premium");
                setActive(true);
                scrollToDiv();
              }} 
            />

          </div>
        </div>
            
        <div className="carousel-item">
          <img className="d-block w-100" src={Img3} alt="First slide" />
            
          <div className="carousel-caption ">
            <p style={{
                margin: 0, 
                fontSize: '3rem'
              }}>The Deluxe</p>

            <p style={{
              margin: 0, marginBottom: '1rem', 
              marginLeft: '0.5rem', 
              fontSize: '1.5rem'
              }}>Deluxe rooms starting at ₹1500</p>

            <Button 
              name={'Book this'} 
              clickEvent={()=>{
                setroomType("Deluxe");
                setActive(true);
                scrollToDiv();
              }} 
            />

          </div>
        </div>
            
        <div className="carousel-item">
          <img className="d-block w-100" src={Img4} alt="Second slide" />
          <div className="carousel-caption ">
            
            <p style={{
                margin: 0, 
                fontSize: '3rem'
              }}>The Classic</p>

            <p style={{
              margin: 0, marginBottom: '1rem', 
              marginLeft: '0.5rem', 
              fontSize: '1.5rem'
              }}>Classic rooms starting at ₹1200</p>

            <Button 
              name={'Book this'} 
              clickEvent={()=>{
                setroomType("Classic");
                setActive(true);
                scrollToDiv();
              }} 
            />

          </div>
        </div>
            
            
      </div>
            
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
            
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
            
      </a>
            
    </div>
    
    <div id='BookID' style={{marginBottom:'4.5rem', height:'100%'}}/>

    <div className={ isActive ? 'bookDiv expand' : 'bookDiv' }>
      <Book
        room={roomType}
        clickEvent={()=>{setActive(false)}}
      />

    </div>

    </div>
  )
}

export default forwardRef(Rooms);