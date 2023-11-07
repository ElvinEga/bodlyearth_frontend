import chartCircle from "/chart_circle.svg";
import indicator from "/indicator.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

interface MiniChartProps {
  indexScore: number;
  width: number;
}
const MiniChart = ({ indexScore, width }: MiniChartProps) => {
  const indicatorPosition = indexScore / 100;
  const rotationValue = `rotate(calc(${indicatorPosition} * 263deg))`;
  const translationValue = `translateY(45%)`;
  const percentageValue = width + "px";
  return (
    <div
      id="chart"
      className="flex justify-center items-center float-left w-30"
    >
      <img
        style={{
          transform: "scaleY(-1) rotate(-90deg)",
          width: `${width}px`,
        }}
        src={chartCircle}
        className={`${width}px`}
        // className="w-full"
      />
      <div
        className=""
        style={{
          position: "absolute",
          zIndex: 30,
          margin: "auto",
          width: `${percentageValue}`,
          aspectRatio: "1/1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `${rotationValue} ${translationValue}`,
          transition: "transform 1500ms",
        }}
      >
        <img src={indicator} style={{ width: "15%", margin: "auto" }} />
      </div>
      <div className="absolute z-60 flex flex-col justify-center items-center h-full mx-auto">
        <p id="ind_t_2" className="text-2xl font-semibold">
          {indexScore ? indexScore : "--"}
        </p>
      </div>
    </div>
  );
};

export default MiniChart;
