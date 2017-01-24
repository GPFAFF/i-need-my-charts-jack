import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

const PropTypes = React.PropTypes;

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seriesData: [],
      labelData: [],
    };
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then((res) => {
      const pieData = res.data.chartData;
      const seriesData = [];
      const labelData = [];

      pieData.map((element) => {
        console.log(element);
        const labels = element.labels;
        const series = element.series;

        seriesData.push(series);
        labelData.push(labels);
        return seriesData && labelData;
      });
      this.setState({
        seriesData: seriesData,
        labelData: labelData,
      });
    })
    .catch((err) => {
      const output = document.querySelector('.ct-chart-pie');
      const message = `${err}<br></br>Please try again later`;
      output.className = 'container text-danger';
      output.innerHTML = message;
    });
  }

  render() {
    const pieData = {
      seriesData: this.state.seriesData,
      labelData: this.state.labelData,
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

PieChart.propTypes = {
  chartData: PropTypes.string.isRequired,
};

export default PieChart;
