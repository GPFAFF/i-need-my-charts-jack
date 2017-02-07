import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

const PropTypes = React.PropTypes;

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
    .then((res) => {
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
    .catch((err) => {
      const output = document.querySelector('.graph');
      const message = `${err}<br></br>Please try again later`;
      output.className = 'container text-danger';
      output.innerHTML = message;
    });
  }

  render() {
    const barData = {
      labels: this.state.barLabelData,
      series: this.state.barSeriesData,
    };
    const options = {
      high: 11,
      low: 1,
      fullWidth: true,
      seriesBarDistance: 10,
      chartPadding: {
        right: 60,
      },
      axisX: {
        showGrid: false,
      },
      axisY: {
        onlyInteger: true,
      },
    };
    const type = 'Bar';
    const aspectRatio = 'container .ct-minor-second graph';

    return (
      <section>
        <h2> Got Bars? </h2>
        <ChartistGraph className={aspectRatio} data={barData} options={options} type={type} />
      </section>
    );
  }

}

BarGraph.propTypes = {
  chartData: PropTypes.string.isRequired,
};

export default BarGraph;
