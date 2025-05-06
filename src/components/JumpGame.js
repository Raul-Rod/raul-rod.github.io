import React, { useEffect, useRef, useState } from 'react';

const JumpGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // === GAME STATE ===
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'running' | 'gameover'

  // === CONFIGURABLE CONSTANTS ===
  const GRAVITY = 0.6;
  const JUMP_FORCE = -10;

  const PLAYER_WIDTH = 40;
  const PLAYER_HEIGHT = 40;
  const PLAYER_X = 50;

  const OBSTACLE_WIDTH = 30;
  const OBSTACLE_HEIGHT = 40;
  const OBSTACLE_Y = 260;
  const OBSTACLE_SPEED = 5;

  const GROUND_Y = 320;

  // === GAME STATE REFS ===
  const playerY = useRef(200);
  const velocityY = useRef(0);
  const isJumping = useRef(false);
  const obstacleX = useRef(600);
  const animationRef = useRef();

  // === Jump ===
  const jump = () => {
    if (!isJumping.current && playerY.current >= OBSTACLE_Y) {
      velocityY.current = JUMP_FORCE;
      isJumping.current = true;
    }
  };

  // === Start Game ===
  const startGame = () => {
    playerY.current = 200;
    velocityY.current = 0;
    isJumping.current = false;
    obstacleX.current = 600;
    setGameState('running');
    animationRef.current = requestAnimationFrame(gameLoop);
  };

  // === Game Over ===
  const gameOver = () => {
    cancelAnimationFrame(animationRef.current);
    setGameState('idle');
  };

  // === Click or Touch ===
  const handleInput = () => {
    if (gameState === 'idle') {
      startGame();
    } else if (gameState === 'running') {
      jump();
    } else if (gameState === 'gameover') {
      startGame();
    }
  };

  // === Collision Check ===
  const detectCollision = () => {
    const playerBottom = playerY.current + PLAYER_HEIGHT;
    const obstacleRight = obstacleX.current + OBSTACLE_WIDTH;
    const obstacleBottom = OBSTACLE_Y + OBSTACLE_HEIGHT;

    return (
      PLAYER_X < obstacleRight &&
      PLAYER_X + PLAYER_WIDTH > obstacleX.current &&
      playerY.current < obstacleBottom &&
      playerBottom > OBSTACLE_Y
    );
  };

  // === Game Loop ===
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
    if (playerY.current >= OBSTACLE_Y) {
      playerY.current = OBSTACLE_Y;
      velocityY.current = 0;
      isJumping.current = false;
    }

    ctx.fillStyle = 'blue';
    ctx.fillRect(PLAYER_X, playerY.current, PLAYER_WIDTH, PLAYER_HEIGHT);

    // Update obstacle
    obstacleX.current -= OBSTACLE_SPEED;
    if (obstacleX.current < -OBSTACLE_WIDTH) {
      obstacleX.current = canvas.width;
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(obstacleX.current, OBSTACLE_Y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);

    // Ground
    ctx.fillStyle = 'green';
    ctx.fillRect(0, OBSTACLE_Y + OBSTACLE_HEIGHT, canvas.width, 20);
    
    // Collision and game over
    if (detectCollision()) {
      ctx.fillStyle = 'red';
      ctx.font = '20px sans-serif';
      ctx.fillText('Game Over', 230, 50);
      ctx.fillText('Tap to start', 230, 80);
      gameOver();
      return;
    }

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  // === Canvas Init ===
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = GROUND_Y;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.font = '20px sans-serif';
    ctx.fillText('Tap to start', 230, 50);
  }, []);

  // === Input Events ===
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('click', handleInput);
    container.addEventListener('touchstart', handleInput);
    return () => {
      container.removeEventListener('click', handleInput);
      container.removeEventListener('touchstart', handleInput);
    };
  }, [gameState]);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${GROUND_Y}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
      }}
    >
      <canvas ref={canvasRef} style={{ border: '2px solid black' }} />
    </div>
  );
};

export default JumpGame;