import React, { useState } from 'react';
import './App.css';
import initialGif from './gifs/valentine.gif';
import happyGif from './gifs/happy2.gif';

function App() {
  const [gif, setGif] = useState(initialGif);
  const [message, setMessage] = useState('Will you be my Valentine?');
  const [showButtons, setShowButtons] = useState(true);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonText, setNoButtonText] = useState('No');

  const noPhrases = [
    "Are you sure?",
    "Try again",
    "Please?",
    "Pretty please?",
    "Last chance",
    "Not even a maybe?",
    "Again"
];

  const handleNoClick = () => {
    // Move the "No" button to a random position
    const buttonWidth = 150; // Adjust if your button width is different
    const buttonHeight = 50; // Adjust if your button height is different
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    console.log(randomX, randomY)

    setNoButtonStyle({
      position: 'fixed',
      left: `${randomX}px`,
      top: `${randomY}px`,
    });

    setNoButtonText(noPhrases[(noPhrases.indexOf(noButtonText) + 1) % noPhrases.length]);
  };

  const handleYesClick = () => {
    setGif(happyGif);
    setMessage('Big Chungus Moment');
    setShowButtons(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={gif} alt="Bear with hearts gif" className="valentine-gif" />
        <p>{message}</p>
        {showButtons && (
          <div className="buttons-container">
            <button className="yes-button" onClick={handleYesClick}>Yes</button>
            <button className="no-button" style={noButtonStyle} onClick={handleNoClick}>{noButtonText}</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
