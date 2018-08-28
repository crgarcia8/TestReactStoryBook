import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css'
import { connect } from 'react-redux';
import { selectSection } from '../actions/index';
import { bindActionCreators } from 'redux';

class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><h1>Section</h1>
        <Steps direction="vertical" current={this.props.current}>
          <Steps.Step key={1} title="Client Profile" onClick={() => this.props.selectSection(0)} />
          <Steps.Step key={2} title="Account Management" onClick={() => this.props.selectSection(1)} />
          <Steps.Step key={3} title="System & Tools" onClick={() => this.props.selectSection(2)} />
          <Steps.Step key={4} title="Platforms & Rates" onClick={() => this.props.selectSection(3)} />
        </Steps></div>
    );
  }
}


function mapStateToProps(state) {
  return {
    current: state.currentSection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSection: selectSection }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Section);