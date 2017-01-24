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

  componentDidMount() {
    axios.get(`https://gpfaff.github.io/i-need-my-charts-jack/${this.props.chartData}.json`)
      .then(res => {
        console.log('response ', res);

        let pieData = res.data.chartData.series;
        let series = [];
        
        pieData.map((element) => {
          console.log('elem: ', element);

          let elem = element;
          console.log('series', series);
          series.push(elem);
          console.log('series', series);
        });
        this.setState({
          series: series
        });
        console.log('series State', series);
    });
  }
  
  render() {

    let pieData = {
      series: this.state.series
    };
    console.log('pie data: ', pieData);

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
