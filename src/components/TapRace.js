import React, { useState, useEffect, useRef } from 'react';

const TapRace = () => {
  // Gauge customization
  const gaugeRadius = 60;
  const gaugeThickness = 20;
  const gaugeOffsetX = 0;
  const gaugeOverlap = 20; // Positive moves it *down*, overlapping the button

  // Button customization
  const buttonSize = 80;
  const buttonColor = '#ff4c4c';
  const buttonGlow = 'rgba(255,76,76,0.6)';
  const buttonOffsetX = 0; // Horizontal button shift
  const buttonOffsetY = -20; // Vertical button shift

  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [namePrompt, setNamePrompt] = useState(false);
  const [newTime, setNewTime] = useState(null);

  const timerRef = useRef(null);
  const decayRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('tapRaceLeaderboard');
    if (saved) setLeaderboard(JSON.parse(saved));

    return () => {
      clearInterval(timerRef.current);
      clearInterval(decayRef.current);
    };
  }, []);

  const handleClick = () => {
    if (progress === 0 && !startTime) {
      setStartTime(Date.now());
      timerRef.current = setInterval(() => setElapsed(prev => prev + 1), 1000);
      decayRef.current = setInterval(() => setProgress(prev => Math.max(prev - 1, 0)), 500);
    }

    setProgress(prev => {
      const next = Math.min(prev + 2, 100);
      if (next === 100) handleFinish();
      return next;
    });
  };

  const handleFinish = () => {
    clearInterval(timerRef.current);
    clearInterval(decayRef.current);
    const finalTime = elapsed;
    const position = leaderboard.findIndex(t => finalTime < t.time);
    if (position !== -1 || leaderboard.length < 5) {
      setNamePrompt(true);
      setNewTime(finalTime);
    } else {
      resetGame();
    }
  };

  const submitScore = (name) => {
    if (name.trim().toLowerCase() === 'clean') {
      localStorage.removeItem('tapRaceLeaderboard');
      setLeaderboard([]);
      setNamePrompt(false);
      resetGame();
      return;
    }

    const newEntry = { name, time: newTime };
    const newList = [...leaderboard, newEntry].sort((a, b) => a.time - b.time).slice(0, 5);
    setLeaderboard(newList);
    localStorage.setItem('tapRaceLeaderboard', JSON.stringify(newList));
    setNamePrompt(false);
    resetGame();
  };

  const resetGame = () => {
    setProgress(0);
    setStartTime(null);
    setElapsed(0);
  };

  // SVG math for half-circle
  const circumference = Math.PI * gaugeRadius;
  const offset = circumference - (progress / 100) * circumference;
  const centerX = 75 + gaugeOffsetX;
  const centerY = 75 + gaugeOverlap;
  const arcStartX = centerX - gaugeRadius;
  const arcEndX = centerX + gaugeRadius;
  const arcY = centerY;

  return (
    <div style={{
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '1rem',
      position: 'relative'
    }}>
      <div style={{ marginTop: '50px' }}>Time: {elapsed}s</div>
      {/* Half Circle Gauge */}
      <svg width="150" height="100" style={{ marginBottom: '-20px', zIndex: 1, position: 'relative' }}>
        <path
          d={`M ${arcStartX},${arcY} A ${gaugeRadius},${gaugeRadius} 0 0 1 ${arcEndX},${arcY}`}
          fill="none"
          stroke="#ddd"
          strokeWidth={gaugeThickness}
        />
        <path
          d={`M ${arcStartX},${arcY} A ${gaugeRadius},${gaugeRadius} 0 0 1 ${arcEndX},${arcY}`}
          fill="none"
          stroke="#4caf50"
          strokeWidth={gaugeThickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.2s' }}
        />
      </svg>

      {/* Glowing Tap Button */}
      <button
        onClick={handleClick}
        style={{
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          marginTop: `${buttonOffsetY}px`,
          marginLeft: `${buttonOffsetX}px`,
          borderRadius: '50%',
          border: 'none',
          backgroundColor: buttonColor,
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          cursor: 'pointer',
          boxShadow: `0 0 15px 5px ${buttonGlow}`,
          animation: progress > 0 ? 'pulse 1s infinite' : 'none',
          position: 'relative',
          zIndex: 0
        }}
      >
        Tap
      </button>

      <div style={{ marginTop: '20px', width: '60%' }}>
        <h3>Top 5 Times</h3>
        <ol>
          {leaderboard.map((entry, idx) => (
            <li key={idx}>{entry.name} - {entry.time}s</li>
          ))}
        </ol>
      </div>

      {namePrompt && (
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Your Name"
            onKeyDown={(e) => {
              if (e.key === 'Enter') submitScore(e.target.value);
            }}
            autoFocus
          />
          <p>You've made the leaderboard! Press Enter to submit.</p>
        </div>
      )}

      {/* Pulse animation keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 15px 5px ${buttonGlow}; }
            50% { box-shadow: 0 0 25px 10px ${buttonGlow.replace('0.6', '0.9')}; }
            100% { box-shadow: 0 0 15px 5px ${buttonGlow}; }
          }
        `}
      </style>
    </div>
  );
};

export default TapRace;