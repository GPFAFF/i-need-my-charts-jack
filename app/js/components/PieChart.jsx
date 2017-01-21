import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist'; 

class PieChart extends Component {
  render() {
    var data = {
      series: [5, 3, 4, 1]
    };
    var sum = function(a, b) { return a + b };

    var pieChartOptions = {
      /*new Chartist.Pie('.ct-chart', data, {
        labelInterpolationFnc: function(value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
      }); */
    }

    return (
      <section>
        <h2> Here comes the pie </h2>
        <ChartistGraph />
      </section>
    )
  }
}

export default PieChart;
