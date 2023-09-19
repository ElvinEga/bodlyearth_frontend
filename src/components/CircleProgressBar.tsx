interface CircleProgressBarProps {
  percentage: number;
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
  percentage,
}) => {
  const circumference = 2 * Math.PI * 50;
  const strokeDashOffset = circumference * (1 - percentage);

  return (
    <svg viewBox="0 -10 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20,60a35,35 0 1,1 60,0"
        stroke="#D3D7DB"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
      ></path>
      <path
        d="M20,60a35,35 0 1,1 60,0"
        stroke="#008000"
        stroke-width="6"
        pathLength="100"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="50 85"
      ></path>
      <circle
        cx="0"
        cy="0"
        r="6"
        stroke-width="6"
        fill="#FFFFFF"
        stroke="#008000"
      >
        <animateMotion
          begin="0s"
          dur="infinite"
          repeatCount="infinite"
          keyPoints="0.5;0.5"
          fill="freeze"
          keyTimes="0;1"
          calcMode="linear"
          path="M20,60a35,35 0 1,1 60,0"
        ></animateMotion>
      </circle>
    </svg>
  );
};

export default CircleProgressBar;
