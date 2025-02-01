import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './page-css/WelcomeText.css';

function WelcomeText() {
  // Function to scroll down smoothly
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls to the next section, assuming full viewport height
      behavior: 'smooth'
    });
  };

  return (
    <div className='landingPage'>
      <h1>Welcome to SENSEibles</h1>
      <h1>Where innovation begins and ideas take flight to</h1>
      <TypeAnimation
      sequence={[
        "spark creativity in circuits",
        3000,
        "ignite innovation in electronics",
        3000,
        "shape the future with technology",
        3000  ,
      ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2.5em', fontWeight: 'bold' }}
      />
      {/* Arrow Button */}
      <div className="down-arrow" onClick={scrollToNextSection}>
        ⌄
      </div>
    </div>
  );
}

export default WelcomeText;
