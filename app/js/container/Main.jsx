import React, { Component } from 'react';
import Line from '../components/Line';
import PieChart from '../components/PieChart';
import BarGraph from '../components/BarGraph';
import ExampleError from '../components/ExampleError';

class Main extends Component {
  render() {
    return (
      <main>
        <h1> I need my charts JACK! </h1>
        <Line chartData='data' />
        <PieChart chartData='pie' />
        <BarGraph chartData='barData' />
        <ExampleError chartData="error" />
      </main>
    );
  }
}

export default Main;
