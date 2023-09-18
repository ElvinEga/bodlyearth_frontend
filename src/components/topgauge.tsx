import ReactApexChart from "react-apexcharts";
import RadialBarChart from "./RadialBarChart";
interface Content {
  level: number;
}

export default function TopGauge(props: Content) {
  const options = {
    colors: ["#dc3545"],
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [getColor(props.level)],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: ["Low", "Medium", "High"],
    },
    stroke: {
      lineCap: "round",
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

  function getColor(percentage: number) {
    if (percentage <= 30) {
      return "#dc3545"; // Green
    } else if (percentage <= 60) {
      return "#ffc107"; // Yellow
    } else {
      return "#28a745"; // Red
    }
  }

  return (
    <>
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex flex-col justify-center items-center rounded-t-xl">
          {/* <RadialBarChart level={props.level} /> */}
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png"
            className="mx-auto"
          />
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
