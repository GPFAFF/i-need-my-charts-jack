import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

class Chart extends Component {
  render() {
    var biPolarLineChartData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [1, 2, 3, 1, -2, 0, 1, 0],
        [-2, -1, -2, -1, -2.5, -1, -2, -1],
        [0, 0, 0, 1, 2, 2.5, 2, 1],
        [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
      ]
    }
    var biPolarLineChartOptions = {
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      axisX: {
        showLabel: false,
        showGrid: false
      }
    }
    return (
      <ChartistGraph data={biPolarLineChartData} options={biPolarLineChartOptions} type={'Line'} />
    )
  }
}

export default Chart;
