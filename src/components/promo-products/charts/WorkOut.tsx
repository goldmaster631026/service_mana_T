import React from "react";
import ReactApexChart from "react-apexcharts";

class WorkOut extends React.Component<
  {},
  { options: object; series: Array<number> }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [75],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "65%",
              background: "white",
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
              background: "#dafad4",
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
                color: "#111",
                fontSize: "12px",
                show: true,
                offsetY: 5,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: ["#ABE5A1"],
          gradient: {
            type: "vertical",
            gradientToColors: ["green"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 200],
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
          height={100}
          width="100"
        />
      </div>
    );
  }
}

export default WorkOut;
