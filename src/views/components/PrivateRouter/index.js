import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../../../service/Auth';

const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            Auth() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRouter;