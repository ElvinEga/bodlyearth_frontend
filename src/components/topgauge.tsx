"use client";

import ReactApexChart from "react-apexcharts";
import GaugeComponent from "react-gauge-component";
import { useEffect, useState } from "react";
interface Content {
  level: number;
}

export default function TopGauge(props: Content) {
  const [currentValue] = useState(props.level);

  const initialSeries = [
    {
      data: [50, 10, 70], // Replace with your data values
    },
  ];

  function getColor(percentage: number) {
    if (percentage <= 30) {
      return "#24E500"; // Green
    } else if (percentage <= 60) {
      return "#FFFF00"; // Yellow
    } else {
      return "#FF0000"; // Red
    }
  }

  const initialColors = initialSeries[0].data.map((value) => getColor(value));

  // const initialColors = initialSeries.map((dataSeries) =>
  //   dataSeries.data.map((value) => getColor(value))
  // );

  // State to hold colors and series
  const [colors, setColors] = useState(initialColors);
  const [series, setSeries] = useState(initialSeries);

  // Update the colors and series once when the component mounts
  useEffect(() => {
    setColors(initialColors);
    setSeries(initialSeries);
  }, []);

  const options = {
    colors: colors,
    chart: {
      type: "bar",
      height: 350,
      horizontal: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        borderRadius: 5,
        // barHeight: "50%",
      },
    },
    fill: {
      colors: colors,
      // type: "gradient",
      // gradient: {
      //   shade: "dark",
      //   type: "horizontal",
      //   shadeIntensity: 0.5,
      //   gradientToColors: [getColor(props.level)],
      //   inverseColors: false,
      //   opacityFrom: 1,
      //   opacityTo: 1,
      //   stops: [0, 100],
      // },
    },
    xaxis: {
      categories: ["Low", "Medium", "High"],
    },
    stroke: {
      lineCap: "round",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false, // Set to false to hide grid lines
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

  return (
    <>
      {/* Card */}
      <div className="group flex flex-col  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="pt-5">
          <GaugeComponent
            labels={{
              valueLabel: {
                formatTextValue: (value) => value + "",
                matchColorWithArc: true,
                style: {
                  fontSize: "48px",
                  fontWeight: 700,
                  fill: "#374151",
                  textShadow: "none",
                },
              },
              tickLabels: {
                defaultTickValueConfig: {
                  formatTextValue: (value) => value + "",
                  style: {
                    fontSize: "12px",
                    fontWeight: 700,
                    fill: "#6B7280",
                    textShadow: "none",
                  },
                },
                defaultTickLineConfig: {
                  // char: "_",
                  hide: true,
                  style: {
                    // display: "none",
                    fontSize: "12px",
                    fill: "#6B7280",
                    textShadow: "none",
                  },
                },
              },
            }}
            arc={{
              padding: 0.8,
              subArcs: [
                {
                  limit: 30,
                  color: "#24E500",
                  showTick: true,
                  tooltip: { text: "Low" },
                },
                {
                  limit: 55,
                  color: "#7fff00",
                  showTick: true,
                  tooltip: { text: "Fine" },
                },

                {
                  limit: 70,
                  color: "#FFFF00",
                  showTick: true,
                  tooltip: { text: "Fine" },
                },
                {
                  limit: 80,
                  color: "#F6435C",
                  showTick: true,
                  tooltip: { text: "Fine" },
                },
                {
                  limit: 90,
                  color: "#E32227",
                  showTick: true,
                  tooltip: { text: "Fine" },
                },
                {
                  limit: 100,
                  color: "#BF181D",
                  showTick: true,
                  tooltip: { text: "Full" },
                },
              ],
            }}
            value={currentValue}
          />
        </div>
        <div className="pr-4 pl-4">
          <div className="horizontal-bar-chart" id="chart">
            <ReactApexChart
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              options={options}
              series={series}
              height={160}
              type="bar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
