import React, { Component } from 'react';
import './App.css';
import Immutable from 'immutable'
import ProgressBar from './ProgressBar';
import DataPoint from './DataPoint';
import StackedBarGraph from './StackedBarGraph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 40,
      percentage: 60,
      data: Immutable.List.of(23, 87, 52, 46)
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ProgressBar
          width={this.state.width}
          height={this.state.height}
          percentage={this.state.percentage}
          />
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: parseInt(e.target.value)})}
            />
          <input
            type="number"
            min="0"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: parseInt(e.target.value)})}
            />
          <input
            type="number"
            min="0"
            max="100"
            value={this.state.height}
            onChange={e => this.setState({ height: parseInt(e.target.value)})}
            />
          <input
            type="number"
            min="0"
            max="1000"
            value={this.state.width}
            onChange={e => this.setState({ width: parseInt(e.target.value)})}
            />
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  percentage: React.PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  width: 600,
  height: 40,
  percentage: 50
};

export default App;
