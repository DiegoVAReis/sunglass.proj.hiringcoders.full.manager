import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from './views/pages/Login';
import Dashboard from './views/pages/Dashboard';
import RegisterClient from './views/pages/RegisterClient';
import RegisterProduct from './views/pages/RegisterProduct';
import ProductList from './views/pages/ProductList';
import ClientList from './views/pages/ClientList';

import PrivateRouter from './views/components/PrivateRouter';
import PublicRouter from './views/components/PublicRouter';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <PublicRouter  restricted={true} component={Login} path="/login" exact />
                <PrivateRouter component={Dashboard} path='/' exact />
                <PrivateRouter component={Dashboard} path='/dashboard' exact />
                <PrivateRouter component={ClientList} path='/clientes' exact />
                <PrivateRouter component={RegisterClient} path='/cadastroCliente' exact />
                <PrivateRouter component={ProductList} path='/produtos' exact />
                <PrivateRouter component={RegisterProduct} path='/cadastroProduto' exact />
            </Switch>
        </BrowserRouter>
    );
}