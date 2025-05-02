import React, { useState, useEffect } from 'react';

const ReactionGame = () => {
  const [gameState, setGameState] = useState('waiting'); // 'waiting', 'ready', 'now', 'result'
  const [message, setMessage] = useState('Click to start');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const startGame = () => {
    if (gameState === 'waiting') {
      setMessage('Wait for it...');
      setGameState('ready');

      const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 sec

      const id = setTimeout(() => {
        setMessage('Click now!');
        setStartTime(Date.now());
        setGameState('now');
      }, randomDelay);

      setTimeoutId(id);
    } else if (gameState === 'ready') {
      clearTimeout(timeoutId);
      setMessage('Too soon! Click to try again.');
      setGameState('waiting');
    } else if (gameState === 'now') {
      const endTime = Date.now();
      const time = endTime - startTime;
      setReactionTime(time);
      setMessage(`Your reaction time: ${time}ms. Click to play again.`);
      setGameState('waiting');
    } else {
      // Reset from result state
      setReactionTime(null);
      setMessage('Click to start');
      setGameState('waiting');
    }
  };

  return (
    <div
      onClick={startGame}
      style={{
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          gameState === 'ready' ? '#f1c40f' :
          gameState === 'now' ? '#2ecc71' :
          '#3498db',
        color: '#fff',
        fontSize: '24px',
        borderRadius: '15px',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background-color 0.3s ease'
      }}
    >
      {message}
    </div>
  );
};

export default ReactionGame;
