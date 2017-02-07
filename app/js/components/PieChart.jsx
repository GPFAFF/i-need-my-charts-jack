import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

const PropTypes = React.PropTypes;

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      label: [],
    };
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then((res) => {
      console.log(res);
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
        series: seriesData,
        labelData: labelData,
      });
      console.log(seriesData);
      console.log(labelData);

    })
    .catch((err) => {
      const output = document.querySelector('.ct-chart-pie');
      const message = `${err}<br></br>Please try again later`;
      output.className = 'text-danger';
      output.innerHTML = message;
    });
  }

  render() {
    const pieData = {
      series: this.state.series,
      labels: this.state.labelData,
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
