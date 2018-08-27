import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import Grid from '../components/grid';
import Dropdown from '../components/dropdown';
import ClientLanding from '../components/clientLanding';
import ClientDetail from '../components/clientDetail';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/grid" component={Grid} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/clientLanding" component={ClientLanding} />
        <Route path="/clientDetail" component={ClientDetail} />
    </Switch>
)

export default Main;