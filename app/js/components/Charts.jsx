import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import axios from 'axios';


class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: []
    }
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
      .then(res => {
        const chartData = res.map(obj => obj.data);
        console.log(chartData);
        this.setState({ chartData });
      });
  }
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
    };

    var type = 'Bar';
    var aspectRatio = 'ct-octave';

    return (
      <section>
        <h2> I need my Charts Jack! </h2>
        
        <ul>
          {this.state.chartData.map(chartData => 
            <li key={chartData.Letter}>{chartData.Freq}</li>
          )}
        </ul>

        <ChartistGraph className={aspectRatio} type={type} data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
      </section>
    )
  }
}

export default Chart;
