import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';


class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.setState({
      labelData: [],
      seriesData: []
    })
  }

  componentDidMount() {
  axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
    .then(res => {
      let chartData = res.data.chartData,
          labelData = [],
          seriesData = [];
      
      chartData.map((element, key) => {
        let labels = element.labels,
            series = element.series;
        
        labelData.push(labels);
        seriesData.push(series);
      });

      this.setState({
        labelData: labelData,
        seriesData: [seriesData]
      })
    });
  }
  
  render() {

    let data = {
      labels: this.state.labelData,
      series: this.state.seriesData
    }

    let options = {
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

    let type = 'Bar';
    let aspectRatio = 'ct-octave';

    return (
      <section>
      <h2> Got Bars? </h2>
        <ChartistGraph className={aspectRatio} data={data} options={options} type={type} />
      </section>
    )
  }
}

export default BarGraph;
