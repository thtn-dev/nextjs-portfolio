import type React from 'react';

interface PingDotProps {
  color?: string;
  size?: string;
  ringColor?: string;
}

const PingDot: React.FC<PingDotProps> = ({
  color = 'bg-green-500',
  size = 'w-3 h-3',
  ringColor = 'bg-green-400'
}) => {
  return (
    <span className='relative flex'>
      <span
        className={`absolute inline-flex animate-ping ${size} rounded-full ${ringColor} opacity-75`}
      ></span>
      <span
        className={`relative inline-flex ${size} rounded-full ${color}`}
      ></span>
    </span>
  );
};

export default PingDot;
