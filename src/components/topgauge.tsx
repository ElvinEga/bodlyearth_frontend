import ReactApexChart from "react-apexcharts";
import RadialBarChart from "./RadialBarChart";
interface Content {
  level: number;
}

export default function TopGauge(props: Content) {
  const options = {
    chart: {
      type: "bar",
      horizontal: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["Low", "Medium", "High"],
    },
    yaxis: {
      labels: {
        formatter: function (value: string) {
          switch (value) {
            case "Low":
              return "Drought";
            case "Medium":
              return "Rainfall";
            case "High":
              return "Temperature";
            default:
              return value;
          }
        },
      },
    },
  };

  const series = [
    {
      data: [50, 30, 70], // Replace with your data values
    },
  ];
  return (
    <>
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex flex-col justify-center items-center rounded-t-xl">
          <RadialBarChart level={props.level} />
        </div>
        <div className="pr-4 pl-4">
          <div className="horizontal-bar-chart" id="chart">
            <ReactApexChart
              options={options}
              series={series}
              height={180}
              type="bar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
