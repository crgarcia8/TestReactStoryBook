import React, { Component } from 'react';
import Select from 'react-select';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    switch (this.state.value) {
      case '1':
        return <div><h1>FORM</h1></div>
        break;
      case "2":
        return <div><h1>FORM1</h1></div>
        break;
      case "3":
        return <div><h1>FORM2</h1></div>
        break;
      case "4":
        return <div><h1>FORM3</h1></div>
        break;
        default:
        return  <div><h1>Seleccione</h1></div>;


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
