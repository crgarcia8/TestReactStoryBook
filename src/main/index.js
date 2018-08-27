import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import Test from '../components/test';
import Grid from '../components/grid';
import Dropdown from '../components/dropdown';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/grid" component={Grid} />
        <Route path="/dropdown" component={Dropdown} />
    </Switch>
)

export default Main;