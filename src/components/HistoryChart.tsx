// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ReactApexChart from "react-apexcharts";

const SplineChart = () => {
  // Sample data for credit usage
  const creditUsageData = [
    { x: "Jan", y: 0 },
    { x: "Feb", y: 5 },
    { x: "Mar", y: 10 },
    { x: "Apr", y: 3 },
    { x: "May", y: 20 },
    { x: "Jun", y: 15 },
    { x: "Jul", y: 29 },
    { x: "Aug", y: 29 },
  ];

  // ApexCharts configuration
  const chartOptions = {
    chart: {
      id: "credit-usage-chart",
      height: "100%",
      maxWidth: "100%",
      type: "line", // Change the type to "line" for a line graph
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: creditUsageData.map((data) => data.x),
    },
    yaxis: {
      min: 0,
      max: 30,
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
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: "Risk Percentage History",
      data: creditUsageData.map((data) => data.y),
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="line"
      height={350}
    />
  );
};

export default SplineChart;
