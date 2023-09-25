// import React from "react";
import { Doughnut } from "react-chartjs-2";

interface GradientGaugeProps {
  percentage: number;
}

const GradientGauge = (percentage: GradientGaugeProps) => {
  const data = {
    label: ["Yes", "No"],
    datasets: [
      {
        data: [percentage, 100 - percentage.percentage],
        backgroundColor: ["rgba(0, 255, 0, 0.6)", "rgba(255, 0, 0, 0.6)"],
        hoverBackgroundColor: ["rgba(0, 255, 0, 0.8)", "rgba(255, 0, 0, 0.8)"],
        borderWidth: 0,
        circumference: 180,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="gradient-gauge">
      <Doughnut data={data} options={options} />
      <div className="gauge-text">{percentage.percentage}%</div>
    </div>
  );
};

export default GradientGauge;
