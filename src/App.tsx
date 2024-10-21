import React, { useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import catAnimation from './cat-lottie.json';
import sleepyCatPhoto from './sleepy-coin-logo.jpg';
import awakeCatPhoto from './awake-cat-photo.jpeg';
import { handleThemeToggle } from './themeToggle';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light-theme');
  const [buttonText, setButtonText] = useState('Sleepy Time'); // New state for button text


  return (
      <div className="container">
      <div className="header">
      <Lottie animationData={catAnimation} className="lottie-animation" />
        <h1>Welcome to Sleepy Coin</h1>
      </div>

      <div className="image-container">
        <img src={theme === 'light-theme' ? awakeCatPhoto : sleepyCatPhoto} alt="My Cat" className="cat-photo" />
        <button className="button" onClick={() => handleThemeToggle(theme, setTheme, setButtonText)}>
        {buttonText}
        </button>
      </div>

      <div className="lore-section">
        <h2>The Lore of Sleepy Coin</h2>
        <p>
          Sleepy Coin is inspired by my beloved cat, who brings joy and tranquility to my life.
          Just like my cat, this coin is designed to be a reliable and comforting presence in the
          world of cryptocurrency. With a focus on community trust and transparency, Sleepy Coin
          aims to create a safe and welcoming environment for all its holders.
        </p>
        <p>
          Every transaction made with Sleepy Coin contributes to a community fund dedicated to
          animal welfare and rescue organizations. By holding Sleepy Coin, you're not just
          investing in a cryptocurrency; you're also supporting a cause that matters.
        </p>
      </div>

      <div className="launch-section">
        <h2>Planned Launch Process</h2>
        <ol>
          <li>
            <strong>Community Engagement:</strong> We will engage with our community through social
            media platforms, providing regular updates and fostering discussions.
          </li>
          <li>
            <strong>Whitelist Registration:</strong> Interested buyers can register for a whitelist
            to ensure they have a fair chance during the launch.
          </li>
          <li>
            <strong>Pre-Launch Marketing:</strong> A marketing campaign will begin one week before
            the launch to generate excitement and awareness.
          </li>
          <li>
            <strong>Launch Day:</strong> On the launch day, Sleepy Coin will be available for purchase
            on our designated platforms. Stay tuned for the exact date!
          </li>
          <li>
            <strong>Post-Launch Support:</strong> We will continue to provide support and updates to
            our community to ensure a smooth experience for all holders.
          </li>
        </ol>
      </div>

      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
      </div>
    </div>
  );
};

export default App;
