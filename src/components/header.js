import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div><h1>ENCABEZADO</h1>
        <Link to={`/`}>
          Log Out
            </Link>
      </div>
    );
  }
}
