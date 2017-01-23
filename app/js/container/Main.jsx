import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from '../components/Charts';
import PieChart from '../components/PieChart';
import BarGraph from '../components/BarGraph';

class Main extends Component {
  render() {
    return (
      <main>
        <Chart />
        <BarGraph />
      </main>
    )
  }
}

export default Main;
