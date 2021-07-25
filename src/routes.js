import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Dashboard from './views/pages/Dashboard';
import RegisterClient from './views/pages/RegisterClient';
import RegisterProduct from './views/pages/RegisterProduct';
import ProductList from './views/pages/ProductList';
import ClientList from './views/pages/ClientList';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/clientes' component={ClientList}/>
                <Route path='/cadastroCliente' component={RegisterClient}/>
                <Route path='/produtos' component={ProductList}/>
                <Route path='/cadastroProduto' component={RegisterProduct}/>
            </Switch>
        </BrowserRouter>
    );
}