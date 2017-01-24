import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then(res => {
      const pieData = res.data.chartData.series;
      const series = [];

      pieData.map((element) => {
        const elem = element;
        series.push(elem);
        return series;
      });
      this.setState({
        series: series,
      });
    })
    .catch(err => {
      const output = document.querySelector('.ct-chart-pie');
      output.className = 'container text-danger';
      output.innerHTML = err.message + '<br></br>' + 'Please try again later';
    });
  }

  render() {
    const pieData = {
      series: this.state.series,
    };
    const options = {
      fullWidth: true,
      showLabel: true,
    };
    const type = 'Pie';
    const aspectRatio = 'ct-bar ct-golden-section ct-chart-pie';

    return (
      <section>
        <h2> Got Pies? </h2>
        <ChartistGraph className={aspectRatio} data={pieData} options={options} type={type} />
      </section>
    );
  }

}

export default PieChart;
