import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barLabelData: [],
      barSeriesData: [],
    };
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then(res => {
      const chartData = res.data.chartData;
      const barLabelData = [];
      const barSeriesData = [];

      chartData.map((element) => {
        const labels = element.labels;
        const series = element.series;

        barLabelData.push(labels);
        barSeriesData.push(series);

        return barLabelData && barSeriesData;
      });

      this.setState({
        barLabelData: barLabelData,
        barSeriesData: [barSeriesData],
      });
    })
    .catch(err => {
      const output = document.querySelector('.graph');
      output.className = 'container text-danger';
      output.innerHTML = err.message + '<br></br>' + 'Please try again later';
    });
  }
  
  render() {
    const barData = {
      labels: this.state.barLabelData,
      series: this.state.barSeriesData,
    };
    const options = {
      high: 10,
      low: 0,
      fullWidth: true,
      chartPadding: {
        right: 40,
      },
      axisX: {
        labelInterpolationFnc(value, index) {
          return index % 1 === 0 ? value : null;
        },
      },
    };
    const type = 'Bar';
    const aspectRatio = 'ct-golden-section';

    return (
      <section className="graph">
        <h2> Got Bars? </h2>
        <ChartistGraph className={aspectRatio} data={barData} options={options} type={type} />
      </section>
    );
  }
}

export default BarGraph;
