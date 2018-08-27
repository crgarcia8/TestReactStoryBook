import React, { Component } from 'react';
import Header from './header';
import Section from './section';
import Form from './form';
import { Link } from 'react-router-dom';

export default class ClientDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <Form />
        <Link to={`/clientLanding`}>
          Ir a Client Landing
            </Link>
      </div>
    );
  }
}
