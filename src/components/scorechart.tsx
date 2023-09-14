import React from "react";
import ReactApexChart from "react-apexcharts";

const ScoreChart = () => {
  const indicatorPosition = 150 / 100;
  const rotationValue = `rotate(calc(${indicatorPosition} * 263deg))`;
  const translationValue = `translateY(45%)`;

  return (
    <div
      id="chart"
      className="d-flex justify-content-center align-items-center"
      style={{
        textAlign: "center",
        marginTop: "0.4vw",
      }}
    >
      <img
        src="/chart_circle.svg"
        width="100%"
        height="130px"
        alt=""
        style={{
          width: "calc(70% - 2vw)",
          aspectRatio: "1/1",
          transform: "scaleY(-1) rotate(-90deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 150,
          margin: "auto",
          width: "calc(60% - 2vw)",
          aspectRatio: "1/1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `${rotationValue} ${translationValue}`,
          // marginBottom:
        }}
      >
        <img src="/indicator.svg" style={{ width: "17%", margin: "auto" }} />
      </div>

      <div
        className="d-flex justify-content-center align-content-center"
        style={{
          position: "absolute",
          zIndex: 200,
          flexDirection: "column",
          margin: "auto",
          aspectRatio: "1/1",
          width: "100%",
        }}
      >
        {/* <p
          id="ind_t_1"
          style={{ fontSize: "2.5vw", marginBottom: "0", marginTop: "1rem" }}
        >
          {compositeScore ? 100 - compositeScore : "--"}
        </p> */}
        <p style={{ fontSize: "1vw" }}>Score</p>
      </div>
    </div>
  );
};

export default ScoreChart;
