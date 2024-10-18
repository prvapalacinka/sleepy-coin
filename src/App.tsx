import React from 'react';
import Lottie from 'lottie-react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import catAnimation from './cat-lottie.json';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sleepy Coin</h1>

        {/* Cat Image/Animation */}
        <div className="cat-section">
          <Lottie animationData={catAnimation} style={{ height: 300, width: 300 }} />
          <img
            src="/sleepy-coin-logo.jpeg"
            alt="Sleepy Cat"
            style={{ height: 300, width: 300, display: 'none' }}
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
