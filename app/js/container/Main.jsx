import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from '../components/Charts';
import PieChart from '../components/PieChart';

class Main extends Component {
  render() {
    return (
      <main>
        <Chart />
        <PieChart />
      </main>
    )
  }
}

export default Main;
