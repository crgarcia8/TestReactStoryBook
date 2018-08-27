import React, { Component } from 'react';
import Header from './header';
import ClientGrid from './clientGrid';
import { Link } from 'react-router-dom';

export default class ClientLanding extends Component {
  render() {
    return (
      <div>
        <Header />
        <ClientGrid />
        <div>
          <Link to={`/clientDetail`}>
            Ir a Client Detail
            </Link>
        </div>
      </div>
    );
  }
}
