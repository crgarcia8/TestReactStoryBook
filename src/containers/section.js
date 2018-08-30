import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSection } from '../actions/index';

class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sectionClass">
        <Steps direction="vertical" current={this.props.current44}>
          <Steps.Step key={1} title="Client Profile" onClick={() => this.props.selectSection3(0)} />
          <Steps.Step key={2} title="Account Management" onClick={() => this.props.selectSection3(1)} />
          <Steps.Step key={3} title="System & Tools" onClick={() => this.props.selectSection3(2)} />
          <Steps.Step key={4} title="Platforms & Rates" onClick={() => this.props.selectSection3(3)} />
        </Steps>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    current44: state.currentSection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSection3: selectSection }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Section);