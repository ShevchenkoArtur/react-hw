import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../../routes/routes';

const Routes = () => {
    return (
        <Switch>
            {
                routes.map((el, i) => <Route key={i} path={el.path} component={el.component} exact/>)
            }
        </Switch>
    );
};

export default Routes;