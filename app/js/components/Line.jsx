import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';


class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelData: [],
      seriesData: [],
    };
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then(res => {
      const chartData = res.data.chartData;
      const labelData = [];
      const seriesData = [];

      chartData.map((element) => {
        const labels = element.labels;
        const series = element.series;

        labelData.push(labels);
        seriesData.push(series);

        return labelData && seriesData;
      });

      this.setState({
        labelData: labelData,
        seriesData: [seriesData],
      });
    })
    .catch(err => {
      const output = document.querySelector('.ct-line');
      output.className = 'container text-danger';
      output.innerHTML = err.message + '<br></br>' + 'Please try again later';
    });
  }

  render() {
    const type = 'Line';
    const aspectRatio = 'ct-line ct-octave';
    const biPolarBarChartData = {
      labels: this.state.labelData,
      series: this.state.seriesData,
    };
    const biPolarBarChartOptions = {
      fullWidth: true,
      showArea: true,
      showGrid: false,
      high: 11,
      low: 1,
      chartPadding: {
        right: 40,
      },
      axisY: {
        onlyInteger: true,
      }
    };

    return (
      <section>
        <h2> Got Lines? </h2>
        <ChartistGraph className={aspectRatio} type={type} data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
      </section>
    );
  }
}

export default Line;
