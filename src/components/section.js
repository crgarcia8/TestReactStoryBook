import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css'

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  render() {
    return (
      <div><h1>Section</h1>
        <Steps direction="vertical" current={this.state.current}>
          <Steps.Step title="Client Profile" onClick={() => this.setState({ current: 0 })} />
          <Steps.Step title="Account Management" onClick={() => this.setState({ current: 1 })} />
          <Steps.Step title="System & Tools" onClick={() => this.setState({ current: 2 })} />
          <Steps.Step title="Platforms & Rates" onClick={() => this.setState({ current: 3 })} />
        </Steps></div>
    );
  }
}
