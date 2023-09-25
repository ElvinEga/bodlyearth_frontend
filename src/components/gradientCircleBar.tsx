import React, { useEffect, useState } from "react";

interface GradientCircleProgressBarProps {
  percentage: number;
}

const GradientCircleProgressBar: React.FC<GradientCircleProgressBarProps> = ({
  percentage,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progress = Math.min(100, Math.max(0, percentage));
    const circumference = 2 * Math.PI * 45; // Radius of the circle
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage]);

  return (
    <div className="gradient-circle-progress-bar">
      <svg width="150" height="150">
        <circle
          className="progress-ring__circle"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="75"
          cy="75"
        />
        <circle
          className="progress-ring__path"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="75"
          cy="75"
          style={{ strokeDasharray: `${offset} ${2 * Math.PI * 45}` }}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default GradientCircleProgressBar;
