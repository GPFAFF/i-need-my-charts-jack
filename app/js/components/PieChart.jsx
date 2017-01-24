import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist'; 
import axios from 'axios';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.setState({
      series: [],
    })
  }

  
  render() {

    let pieData = {
      series: [20, 10, 30, 40]
      /*labels: this.state.barLabelData,
      series: this.state.barSeriesData*/
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
    let aspectRatio = 'ct-bar ct-golden-section';

    return (
      <section>
      <h2> Got Pies? </h2>
        <ChartistGraph className={aspectRatio} data={pieData} options={options} type={type} />
      </section>
    )
  }

}

export default PieChart;
