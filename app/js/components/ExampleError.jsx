import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios';

const PropTypes = React.PropTypes;

class ExampleError extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    // incorrect URL call
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then((res) => {
      const errorData = res.data.chartData.series;
    })
    .catch((err) => {
      const output = document.querySelector('.ct-perfect-fifth');
      const message = `${err}<br></br>Please try again later`;
      output.className = 'text-danger';
      output.innerHTML = message;
    });
  }

  render() {
    const error = {
      series: this.state.series,
    };
    const options = {
      fullWidth: true,
      showLabel: true,
      /* const sum = (a, b) => {
        return a + b;
      }
      labelInterpolationFnc(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
      } */
    };
    const type = 'Pie';
    const aspectRatio = 'ct-perfect-fifth';

    return (
      <section>
        <h2> Got ERRS? </h2>
        <ChartistGraph className={aspectRatio} data={error} options={options} type={type} />
      </section>
    );
  }

}

ExampleError.propTypes = {
  chartData: PropTypes.string.isRequired,
};

export default ExampleError;
