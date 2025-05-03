import React, { useEffect, useRef, useState } from 'react';

const UnderConstruction = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const GRAVITY = 0.6;
  const JUMP = -10;
  const PLAYER_WIDTH = 40;
  const PLAYER_HEIGHT = 40;
  const OBSTACLE_WIDTH = 20;
  const OBSTACLE_HEIGHT = 40;
  const OBSTACLE_SPEED = 5;

  const playerY = useRef(200);
  const velocityY = useRef(0);
  const isJumping = useRef(false);
  const obstacleX = useRef(600);
  const animationRef = useRef();

  const jump = () => {
    if (!isJumping.current && playerY.current >= 260) {
      velocityY.current = JUMP;
      isJumping.current = true;
    }
  };

  const handleInput = () => {
    if (!isRunning) {
      setIsRunning(true);
      startGame();
    } else {
      jump();
    }
  };

  const startGame = () => {
    playerY.current = 200;
    velocityY.current = 0;
    isJumping.current = false;
    obstacleX.current = 600;
    animationRef.current = requestAnimationFrame(gameLoop);
  };

  const resetGame = () => {
    cancelAnimationFrame(animationRef.current);
    setIsRunning(false);
  };

  const detectCollision = () => {
    const playerX = 50;
    const playerBottom = playerY.current + PLAYER_HEIGHT;
    const obstacleY = 260;

    return (
      playerX < obstacleX.current + OBSTACLE_WIDTH &&
      playerX + PLAYER_WIDTH > obstacleX.current &&
      playerY.current < obstacleY + OBSTACLE_HEIGHT &&
      playerBottom > obstacleY
    );
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update player
    velocityY.current += GRAVITY;
    playerY.current += velocityY.current;
    if (playerY.current >= 260) {
      playerY.current = 260;
      velocityY.current = 0;
      isJumping.current = false;
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(50, playerY.current, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Update obstacle
    obstacleX.current -= OBSTACLE_SPEED;
    if (obstacleX.current < -OBSTACLE_WIDTH) {
      obstacleX.current = 600;
    }

    ctx.fillStyle = 'gray';
    ctx.fillRect(obstacleX.current, 260, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);

    // Draw text
    ctx.fillStyle = 'black';
    ctx.font = '16px sans-serif';
    //write text 
    ctx.fillText('', 200, 50);

    // Check collision
    if (detectCollision()) {
      resetGame();
      return;
    }

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 300;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('click', handleInput);
    container.addEventListener('touchstart', handleInput);

    return () => {
      container.removeEventListener('click', handleInput);
      container.removeEventListener('touchstart', handleInput);
    };
  }, [isRunning]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <canvas ref={canvasRef} style={{ border: '2px solid black' }} />
    </div>
  );
};

export default UnderConstruction;
