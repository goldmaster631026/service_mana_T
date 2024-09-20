import React from "react";
import ReactApexChart from "react-apexcharts";

class Steps extends React.Component<
  {},
  { options: object; series: Array<number> }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [85],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 5,
              size: "65%",
              background: "#e32b4c",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: false,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#f5aeba",
              strokeWidth: "100%",
              margin: 0,
              dropShadow: {
                enabled: false,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -5,
                show: false,
              },
              value: {
                color: "white",
                fontSize: "12px",
                show: true,
                offsetY: 5,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: ["#F25B6B"],
          gradient: {
            shade: "light",
            type: "vertical",
            gradientToColors: ["#e3a02b", "#e32b4c"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  }

  render() {
    return (
      <div className="">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={150}
          width="180"
        />
      </div>
    );
  }
}

export default Steps;
