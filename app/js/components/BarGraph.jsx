import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';


class BarGraph extends Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      showGrid: true,
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
    };

    var type = 'Bar';
    var aspectRatio = 'ct-octave';

    return (
      <section>
      <h2> Got Bars? </h2>
        <ChartistGraph className={aspectRatio} data={data} options={options} type={type} />
      </section>
    )
  }
}

export default BarGraph;
