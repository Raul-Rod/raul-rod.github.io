import React from 'react';

const Gauge = ({ value = 50, min = 0, max = 100 }) => {
  const radius = 90;
  const stroke = 15;
  const center = 100;
  const circumference = Math.PI * radius;
  const clampedValue = Math.max(min, Math.min(value, max));
  const percent = (clampedValue - min) / (max - min);
  const arcLength = percent * circumference;

  return (
    <svg width="200" height="120" viewBox="0 0 200 120">
      {/* Background arc */}
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        stroke="#eee"
        strokeWidth={stroke}
      />

      {/* Foreground arc */}
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        stroke="#00f260"
        strokeWidth={stroke}
        strokeDasharray={`${arcLength} ${circumference}`}
        strokeLinecap="round"
      />

      {/* Center Text */}
      <text
        x="100"
        y="95"
        textAnchor="middle"
        fontSize="24"
        fill="#333"
      >
        {Math.round(percent * 100)}%
      </text>
    </svg>
  );
};

export default Gauge;
