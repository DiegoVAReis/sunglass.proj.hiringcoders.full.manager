import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../../../service/Auth';

const PublicRouter = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false // rota será publica
        // restricted = true // rota restrita
        <Route {...rest} render={props => (
            Auth() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRouter;