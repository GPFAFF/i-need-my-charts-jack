import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import axios from 'axios';


class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barLabelData: [],
      barSeriesData: []
    }
  }


  componentDidMount() {
    
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
      .then(res => {
         let chartData = res.data.chartData,
            barLabelData = [],
            barSeriesData = [];
        
        chartData.map((element, key) => {
          let labels = element.labels,
              series = element.series;
          
          barLabelData.push(labels);
          barSeriesData.push(series);
        });
      
        this.setState({
          barLabelData: barLabelData,
          barSeriesData: [barSeriesData]
        }) 
      
        console.log('bld', barLabelData);
        console.log('bsd', barSeriesData);
      });
  }
  
  render() {

    let barData = {
      labels: this.state.barLabelData,
      series: this.state.barSeriesData
    };

    console.log('bar data', barData);

    let options = {
      high: 10,
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

    let type = 'Bar';
    let aspectRatio = 'ct-golden-section';

    return (
      <section>
      <h2> Got Bars? </h2>
        <ChartistGraph className={aspectRatio} data={barData} options={options} type={type} />
      </section>
    )
  }
}

export default BarGraph;
