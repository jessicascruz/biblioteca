import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from  './pages/Login';
import Acervo from './pages/Acervo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} ></Route>
                <Route path="/acervo" component={Acervo} ></Route>
            </Switch>
        </BrowserRouter>
    );
}