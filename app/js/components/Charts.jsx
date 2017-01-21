import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';


class Chart extends Component {
  render() {
    var biPolarBarChartData = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2, 10]
      ]
    };
    var biPolarBarChartOptions = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 1 === 0 ? value : null;
        }
      }
    }
    return (
      <section>
        <h2> I need my Charts Jack! </h2>
        <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
      </section>
    )
  }
}

export default Chart;
