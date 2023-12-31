import ReactApexChart from "react-apexcharts";
interface Content {
  level: number;
}

const RadialBarChart = (props: Content) => {
  // const options = {
  //   series: [75],
  //   chart: {
  //     height: 350,
  //     type: "radialBar",
  //     toolbar: {
  //       show: true,
  //     },
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       startAngle: -135,
  //       endAngle: 225,
  //       hollow: {
  //         margin: 0,
  //         size: "70%",
  //         background: "#fff",
  //         image: undefined,
  //         imageOffsetX: 0,
  //         imageOffsetY: 0,
  //         position: "front",
  //         dropShadow: {
  //           enabled: true,
  //           top: 3,
  //           left: 0,
  //           blur: 4,
  //           opacity: 0.24,
  //         },
  //       },
  //       track: {
  //         background: "#fff",
  //         strokeWidth: "67%",
  //         margin: 0, // margin is in pixels
  //         dropShadow: {
  //           enabled: true,
  //           top: -3,
  //           left: 0,
  //           blur: 4,
  //           opacity: 0.35,
  //         },
  //       },
  //       dataLabels: {
  //         show: true,
  //         name: {
  //           offsetY: -10,
  //           show: true,
  //           color: "#888",
  //           fontSize: "17px",
  //         },
  //         value: {
  //           formatter: function (numb: string) {
  //             return parseInt(numb);
  //           },
  //           color: "#111",
  //           fontSize: "36px",
  //           show: true,
  //         },
  //       },
  //     },
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "light",
  //       type: "horizontal",
  //       shadeIntensity: 0.5,
  //       gradientToColors: ["red"],
  //       stops: [0, 70, 100],
  //     },
  //   },
  //   stroke: {
  //     lineCap: "round",
  //   },
  //   labels: ["Percent"],
  // };
  function getColor(percentage: number) {
    if (percentage <= 30) {
      return "#dc3545"; // Green
    } else if (percentage <= 60) {
      return "#ffc107"; // Yellow
    } else {
      return "#28a745"; // Red
    }
  }

  const series = [props.level]; // Replace with your data value (0-100)

  return (
    <div className="radial-bar-chart">
      <ReactApexChart
        options={{
          chart: {
            type: "radialBar",
            height: 350,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "70%",
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  fontSize: "30px",
                  show: true,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter: (val: any) => `${Math.round(val)}%`,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
          colors: [getColor(props.level)],
          xaxis: {
            categories: ["Low", "Medium", "High"],
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
        }}
        series={series}
        type="radialBar"
      />
    </div>
  );
};

export default RadialBarChart;
