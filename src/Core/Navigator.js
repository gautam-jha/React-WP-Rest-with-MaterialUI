import React, { useContext } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as NavigationUtils from '../Helpers/Navigation';
import * as UrlUtils from '../Helpers/URL';
import { AppContext } from '../Layout';

const Navigator = props => {
    const { routes, authenticated, username } = useContext(
        AppContext,
    );
    console.log(authenticated,'x');

    return (
        <Switch>
            {routes.map((route, i) => {
                const View = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact
                        render={routeProps => {
                            if (route.auth) {
                                if (!authenticated) {
                                    return (
                                        <Redirect
                                            to={{
                                                // search: UrlUtils.queryString({
                                                //     username,
                                                // }),
                                                pathname: NavigationUtils.route(
                                                    'pages.login',
                                                ),
                                            }}
                                        />
                                    );
                                }
                            }

                            if (!route.auth && route.hasOwnProperty('path') && route.name == 'pages.login') {
                                if (authenticated) {
                                    return (
                                        <Redirect
                                            to={NavigationUtils.route(
                                                'user.profile',
                                            )}
                                        />
                                    );
                                }
                            }

                            return <View {...props} {...routeProps} />;
                        }}
                    />
                );
            })}
        </Switch>
    );
};

export default withRouter(Navigator);
