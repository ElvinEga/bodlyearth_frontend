// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ReactApexChart from "react-apexcharts";

interface Props {
  data: Score[];
}

const SplineChart = ({ data }: Props) => {
  // Aggregate data to calculate daily averages
  const dailyAverages: { [key: string]: number } = {};
  data.forEach((score) => {
    const date = score.search_date.split(" ")[0]; // Extracting only the date part
    if (!dailyAverages[date]) {
      dailyAverages[date] = { totalRisk: 0, count: 0 };
    }
    dailyAverages[date].totalRisk += score.composite_total_risk;
    dailyAverages[date].count += 1;
  });
  // ApexCharts configuration
  const chartData = {
    options: {
      chart: {
        id: "credit-usage-chart",
        height: "100%",
        maxWidth: "100%",
        type: "line",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
        max: 100,
        title: {
          text: "Composite Total Risk",
        },
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
    series: [
      {
        name: "Risk",
        data: Object.keys(dailyAverages).map((date) => ({
          x: new Date(date).getTime(),
          y: Number(
            dailyAverages[date].totalRisk / dailyAverages[date].count
          ).toFixed(0),
        })),
      },
    ],
  };

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  );
};

export default SplineChart;
