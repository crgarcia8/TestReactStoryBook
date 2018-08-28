import React, { Component } from 'react';
import ClientProfile from './formsClient/clientprofile';
import ClientManagment from './formsClient/clientmanagment';
import ClientSystem from './formsClient/clientsystem';
import { connect } from 'react-redux';
import ClientRates from './formsClient/clientrates';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = { value: '1' };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    switch (this.props.currentSection) {
      case 0:
        return <ClientProfile/>;
      case 1:
        return <ClientManagment/>;
      case 2:
        return <ClientSystem/>;
      case 3:
        return<ClientRates/>;
      default:
        return <div><h1>Seleccione</h1></div>;
    }


    // <div><h1>FORM</h1>
    //       <form onSubmit={this.handleSubmit}>
    //       <Select
    //         className="some-class"
    //         invalidText="A valid value is required"
    //         helperText="Optional helper text."
    //         id="select-1"
    //         defaultValue="placeholder-item"
    //         /> 
    //       <label>
    //         Name:
    //         <input type="text" value={this.state.value} onChange={this.handleChange} />
    //       </label>
    //       <input type="submit" value="Submit" />
    //   </form>
    // </div>
  }
}
function mapStateToProps(state) {
  return {
    currentSection: state.currentSection
  }
}
export default connect(mapStateToProps)(Form);