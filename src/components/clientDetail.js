import React, { Component } from 'react';
import Header from './header';
import Section from '../containers/section';
import ClientHeader from './clientHeader';
import Form from './form';
import { Link } from 'react-router-dom';

export default class ClientDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <ClientHeader />
        <Link to={`/clientLanding`}>Ir a Client Landing</Link>
        <div className="row">
          <div className="col-md-3">
            <Section />
          </div>
          <div className="col-md-9">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
