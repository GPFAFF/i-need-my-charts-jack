import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import axios from 'axios';


class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelData: [],
      seriesData: []
    }
  }

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
      .then(res => {
        let chartData = res.data.chartData,
            labelData = [],
            seriesData = [];
        
        chartData.forEach((element, key, array) => {
          let labels = element.labels,
              series = element.series;
          
          labelData.push(labels);
          seriesData.push(series);
        });

        this.setState({
          labelData: labelData,
          seriesData: seriesData
        })
      });
  }

  render() {
    let type = 'Bar',
        aspectRatio = 'ct-octave',
        biPolarBarChartData = {
          labels: [this.state.labelData],
          series: [this.state.seriesData]
        };

    console.log(biPolarBarChartData);

    const biPolarBarChartOptions = {
      high: 26,
      low: 0,
      fullWidth: true,
      chartPadding: {
        right: 40
      },
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 1 === 0 ? value : null;
        }
      }
    };

    return (
      <section>
        <h2> I need my Charts Jack! </h2>
        <ChartistGraph className={aspectRatio} type={type} data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
      </section>
    )
  }
}

export default Chart;
