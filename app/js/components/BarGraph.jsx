import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';


class BarGraph extends Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13'],
      series: [
        [1, 2, 4, 8, 6, 2, 1, 4, 6, 2, 14, 5]
      ]
    };

    var options = {
      high: 26,
      low: 1,
      fullWidth: true,
      chartPadding: {
        right: 40
      },
      axisY: {
        labelInterpolationFnc: function(value, index) {
          return index;
        }
      },
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 1 === 0 ? value : null;
        }
      }
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
