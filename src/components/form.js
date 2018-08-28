import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

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
  form1() {
    return <div><h1>FORM1</h1></div>
  }
  form2() {
    return <div><h1>FORM2</h1></div>
  }
  form3() {
    return <div><h1>FORM3</h1></div>
  }
  form4() {
    return <div><h1>FORM4</h1></div>
  }

  render() {
    switch (this.props.currentSection) {
      case 0:
        return this.form1();
      case 1:
        return this.form2();
      case 2:
        return this.form3();
      case 3:
        return this.form4();
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