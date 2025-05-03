import React, { useState, useEffect, useRef } from 'react';

const TapRace = () => {
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [namePrompt, setNamePrompt] = useState(false);
  const [newTime, setNewTime] = useState(null);

  const timerRef = useRef(null);
  const decayRef = useRef(null);

  // Load scores from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('tapRaceLeaderboard');
    if (saved) {
      setLeaderboard(JSON.parse(saved));
    }

    return () => {
      clearInterval(timerRef.current);
      clearInterval(decayRef.current);
    };
  }, []);

  const handleClick = () => {
    if (progress === 0 && !startTime) {
      const now = Date.now();
      setStartTime(now);
      timerRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
      decayRef.current = setInterval(() => {
        setProgress(prev => Math.max(prev - 1, 0));
      }, 500);
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
    const newList = [...leaderboard];
    const position = newList.findIndex(t => finalTime < t.time);
    if (position !== -1 || newList.length < 5) {
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
    const newList = [...leaderboard, newEntry]
      .sort((a, b) => a.time - b.time)
      .slice(0, 5);
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

  return (
    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
        Push Me
      </button>
      <div style={{ width: '80%', height: '30px', border: '2px solid #000', marginTop: '20px', position: 'relative' }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#4caf50',
          transition: 'width 0.2s'
        }}></div>
      </div>
      <div style={{ marginTop: '10px' }}>Elapsed: {elapsed}s</div>
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
    </div>
  );
};

export default TapRace;
