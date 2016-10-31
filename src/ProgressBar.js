import React from 'react';

const ProgressBar = ({ width, height, percentage }) => {
  const firstHalfWidth = width * (percentage / 100);
  const secondHalfWidth = width - firstHalfWidth;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x={0} y={0} width={firstHalfWidth} height={height} />
        <rect fill="#50E3C2" x={firstHalfWidth} y={0} width={secondHalfWidth} height={height} />
      </g>
    </svg>
  );
}

export default ProgressBar;
