import React from "react";
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import room1 from '../images/img3.png';
import room2 from '../images/img4.png';
import room3 from '../images/img1.png';

const HotelRoomCarousel = () => {
  const rooms = [
    {
      name: "Standard Room",
      image: room1,
      features: ["Queen bed", "Private bathroom", "Flat-screen TV"],
      price: "$99 per night",
    },
    {
      name: "Deluxe Room",
      image: room2,
      features: ["King bed", "Private balcony", "Ocean view"],
      price: "$149 per night",
    },
    {
      name: "Suite",
      image: room3,
      features: ["Two double beds", "Separate living area", "Kitchenette"],
      price: "$199 per night",
    },
  ];

  return (
    <Carousel>
      {rooms.map((room, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={room.image} alt={room.name} />
          <Carousel.Caption>
            <h3>{room.name}</h3>
            <ul>
              {room.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p>{room.price}</p>
            <Button variant="primary">Book Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HotelRoomCarousel;
