import React from "react";
import ReactApexChart from "react-apexcharts";

interface ScoreChartProps {
  data: { month: string; score: number }[];
}

const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  const options = {
    chart: {
      id: "score-chart",
      height: "100%",
      maxWidth: "100%",
      type: "area",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.map((entry) => entry.month),
    },
    yaxis: {
      title: {
        text: "Score",
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Score Rate Over Months",
      data: data.map((entry) => entry.score),
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ScoreChart;
