// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaUser, FaCalendar, FaBed } from 'react-icons/fa';

// function BookingSection({ handleBooking }) {
//   return (
//     <div className='booking-div'>
//       <h2>Book A Room</h2>
//       <form onSubmit={handleBooking}>
//         <label>
//           <FaUser />
//           <input type='number' name='guests' placeholder='Number of Guests' required />
//         </label>
//         <label>
//           <FaCalendar />
//           <input type='date' name='checkin' placeholder='Check In Date' required />
//         </label>
//         <label>
//           <FaBed />
//           <select name='roomtype' required>
//             <option value=''>Select Room Type</option>
//             <option value='deluxe'>Deluxe Room</option>
//             <option value='premium'>Premium Room</option>
//             <option value='suite'>Suite</option>
//           </select>
//         </label>
//         <button type='submit'>Book Now</button>
//       </form>
//     </div>
//   );
// }

// BookingSection.propTypes = {
//   handleBooking: PropTypes.func.isRequired,
// };

// export default BookingSection;
 

import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";


const BookingSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCheckAvailability = () => {
    // You can replace this with your own code to check the availability of the hotel room
    // based on the phone number entered by the user
    setIsAvailable(true);
  };

  return (
    <div className='bookingSection' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '1.3rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Book a Hotel Room</h2>
      <p style={{ marginBottom: '1rem', textAlign: 'center' }}>
        To book a room, please enter the phone number of the hotel below:
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        {/* <FaPhoneAlt style={{ marginRight: '0.7rem', marginBottom: '0'}}/>
        <label htmlFor="phone-number" style={{ marginRight: '1rem', marginBottom:0 }}>
          Phone Number:
        </label>
        <input
          type="text"
          id="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
        /> */}
      </div>
      <button onClick={handleCheckAvailability} style={{ padding: '0.5rem 1rem', borderRadius: '5px' }}>

        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <FaPhoneAlt style={{margin:'auto',padding:'2px', marginRight:'6px'}}/>
        Check Availability
        </div>
      </button>
      {isAvailable ? (
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          The hotel room is available! Contact the hotel at {phoneNumber} to book your room.
        </p>
      ) : (
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>Sorry, the hotel room is currently not available.</p>
      )}
    </div>
  );
};

export default BookingSection;
