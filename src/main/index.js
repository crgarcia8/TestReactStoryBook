import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import Test from '../components/test';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/ddd" component={Test} />
    </Switch>
)

export default Main;