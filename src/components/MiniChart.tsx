import chartCircle from "/chart_circle.svg";
import indicator from "/indicator.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MiniChart = ({ indexScore }) => {
  const indicatorPosition = indexScore / 100;
  const rotationValue = `rotate(calc(${indicatorPosition} * 263deg))`;
  const translationValue = `translateY(45%)`;
  return (
    <div
      id="chart"
      className="flex justify-center items-center float-left w-30"
    >
      <img
        style={{ transform: "scaleY(-1) rotate(-90deg)" }}
        src={chartCircle}
        className="w-full"
      />
      <div
        className=""
        style={{
          position: "absolute",
          zIndex: 30,
          margin: "auto",
          width: "calc(11.5% - 1vw)",
          aspectRatio: "1/1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `${rotationValue} ${translationValue}`,
        }}
      >
        <img src={indicator} style={{ width: "15%", margin: "auto" }} />
      </div>
      <div className="absolute z-60 flex flex-col justify-center items-center h-full mx-auto">
        <p id="ind_t_2" className="text-3xl font-semibold">
          {indexScore ? indexScore : "--"}
        </p>
      </div>
    </div>
  );
};

export default MiniChart;
