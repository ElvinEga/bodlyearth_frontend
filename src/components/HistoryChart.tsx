// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Score } from "../data/scoreData";

interface Props {
  data: Score[];
}

const StackedBarChart: React.FC<Props> = ({ data }) => {
  // Group data by date and crop
  const groupedData: { [date: string]: { [crop: string]: number } } = {};
  const cropCounts: { [date: string]: { [crop: string]: number } } = {};

  data.forEach((score) => {
    const date = score.search_date.split(" ")[0];
    if (!groupedData[date]) {
      groupedData[date] = {};
      cropCounts[date] = {};
    }
    if (!groupedData[date][score.crop]) {
      groupedData[date][score.crop] = 0;
      cropCounts[date][score.crop] = 0;
    }
    groupedData[date][score.crop] += score.composite_total_risk;
    cropCounts[date][score.crop] += 1;
  });

  // Extract unique crops
  const crops = Array.from(new Set(data.map((score) => score.crop)));

  // Prepare series data
  const seriesData = crops.map((crop) => ({
    name: crop,
    data: Object.keys(groupedData).map((date) => {
      const totalRisk = groupedData[date][crop] || 0;
      const count = cropCounts[date][crop] || 1; // Avoid division by zero
      return (totalRisk / count).toFixed(0);
    }),
  }));

  // Prepare x-axis categories
  const categories = Object.keys(groupedData);

  // ApexCharts configuration
  const chartOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    xaxis: {
      categories,
    },
    yaxis: {
      title: {
        text: "Average Composite Total Risk",
      },
    },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={seriesData}
      type="bar"
      height={350}
    />
  );
};

export default StackedBarChart;
