import React from 'react';
import Lottie from 'lottie-react';
import { FaTelegram, FaTwitter } from 'react-icons/fa'; // Import icons
import catAnimation from './cat-lottie.json'; // Placeholder Lottie animation

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* Title */}
        <h1>Sleepy Coin</h1>

        {/* Cat Image/Animation */}
        <div className="cat-section">
          {/* Lottie animation as placeholder */}
          <Lottie animationData={catAnimation} style={{ height: 300, width: 300 }} />

          {/* Space to add your own cat image */}
          {/* Replace the below img tag with your own image */}
          <img
            src="/path-to-your-cat-image.jpg"
            alt="Sleepy Cat"
            style={{ height: 300, width: 300, display: 'none' }} // Add your cat image here
          />
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={50} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={50} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
