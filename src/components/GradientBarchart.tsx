// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ReactApexChart from "react-apexcharts";

const GradientBarChart = ({ categories, scores }) => {
  // console.log("GradientBarChart:indexScores: ", scores);
  const pickColor = (score) => {
    if (score >= 0 && score <= 30) {
      return "#00ac3e";
    } else if (score > 30 && score <= 70) {
      return "#ffc125";
    } else if (score > 70 && score <= 100) {
      return "#ff4040";
    } else {
      return "#e5e7eb";
    }
  };

  const options = {
    series: [
      {
        name: "Risk",
        data: scores,
      },
    ],
    plotOptions: {
      bar: {
        barHeight: "20%",
        distributed: true,
        horizontal: true,
        borderRadius: 10,
      },
    },
    colors: scores.map((sc) => pickColor(sc)),
    dataLabels: {
      enabled: false,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return val;
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      lineCap: "round",
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
        formatter: (val) => {
          if (val == 10) {
            return "Low";
          } else if (val == 100) {
            return "High";
          } else {
            return;
          }
        },
      },
    },
    yaxis: {
      min: 10,
      max: 100,
      labels: {
        show: true,
        style: {
          fontSize: "0.7rem",
        },
      },
    },
    grid: {
      show: false, // Set to false to hide grid lines
    },
    legend: {
      show: false,
      showForSingleSeries: true,
    },
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        speed: 1500,
        animateGradually: {
          enabled: true,
          delay: 1500,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1500,
        },
      },
    },
    theme: {
      mode: "light",
      palette: "palette10",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
  };

  return (
    <div id="chart" style={{ marginTop: "-1.5rem" }}>
      {/* <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={200}

      /> */}
      <ReactApexChart
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={{
          ...options, // Keep the existing options

          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 10,
              colors: {
                // Specify an array of colors here
                ranges: [
                  { from: 0, to: 30, color: "#00ac3e" }, // Color for shorter bars
                  { from: 30, to: 70, color: "#ffc125" }, // Color for medium-length bars
                  { from: 70, to: 100, color: "#ff4040" }, // Color for longer bars
                  // Add more color ranges as needed
                ],
              },
            },
          },
        }}
        series={scores}
        type="bar"
        height={150}
      />
    </div>
  );
};

export default GradientBarChart;
