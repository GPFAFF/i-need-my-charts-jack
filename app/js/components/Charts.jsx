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
        
        chartData.forEach((element, key) => {
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
    let type = 'Bar',
        aspectRatio = 'ct-octave',
        biPolarBarChartData = {
          labels: this.state.labelData,
          series: this.state.seriesData
        };
        //console.log('Line Data: ', biPolarBarChartData);

    // new chart
    /*updateChart: function (data) {
        return new Chartist.Bar('.chart', data);
    },*/
    const biPolarBarChartOptions = {
      fullWidth: true,
      showArea: true,
      showGrid: false,
      high: 10,
      low: 0,
      onlyInteger: true,
      chartPadding: {
        right: 40
      },
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
