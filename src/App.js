
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Rooms from './Components/Rooms.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Contacts from './Components/Contacts.jsx';

import './App.css';
import { useRef } from 'react';


function App() {

const refR = useRef(null);
const refC = useRef(null);
const refT = useRef(null);
const refH = useRef(null);

const handleRoomClick = () => {
  refR.current?.scrollIntoView ({ behaviour:'smooth' });
}

const handleContactClick = () => {
  refC.current?.scrollIntoView ({ behaviour:'smooth' });
}

const handleTestimonialClick = () => {
  refT.current?.scrollIntoView ({ behaviour:'smooth' });
}

const handleHeroClick = () => {
  refH.current?.scrollIntoView ({ behaviour:'smooth' });
}

  return (
    <div className="App">
      <Navbar 
        testimonialClick={handleTestimonialClick}
        roomClick={handleRoomClick}
        contactClick={handleContactClick}
        heroClick={handleHeroClick}
      />
      <Hero 
        roomClick={handleRoomClick} 
        contactClick={handleContactClick}
        ref={refH}
      />
      <div className='test-contacts'>
      <Rooms ref={refR}/>
      <Testimonials ref={refT}/>
      <Contacts ref={refC}/>
      </div>
    </div>
  );
}

export default App;
