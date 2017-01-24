import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist'; 
import axios from 'axios';

class exampleError extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: []
    }
  }

  componentDidMount() {
    // incorrect URL call
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartDta}.json`)
      .then(res => {

        /*let pieData = res.data.chartData.series;
        let series = [];
        
        pieData.map((element) => {
          let elem = element;
          series.push(elem);
        });
        this.setState({
          series: series
        });*/
    })
    .catch(err => {
      let output = this.document.querySelector('.ct-chart')
      output.className = 'container text-danger';
      output.innerHTML = err.message  + '<br> </br>' + 'Please try again later';
    });
  }
  
  render() {

    let error = {
      /*series: this.state.series*/
    };

    let options = {
      fullWidth: true,
      showLabel: true
      /*let sum = (a, b) => {
        return a + b;
      }
      labelInterpolationFnc(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
      }*/
    }
    

    let type = 'Pie';
    let aspectRatio = 'ct-golden-section ct-chart-pie';

    return (
      <section>
        <h2> Got ERRS? </h2>
        <ChartistGraph className={aspectRatio} data={error} options={options} type={type} />
      </section>
    )
  }

}

export default exampleError;
