import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { RouteWrapper, PrivateRoute, AdminRoute } from './Route.js'

import AuthRoutes from '../modules/auth/routes'

import Error404 from './404'

export default function Routes () {
    return (
        <Router>
            {/* <NavBar /> */}
            <Switch>
                { AuthRoutes.map((props, i) => <RouteWrapper key={i} { ...props } />) }

                <RouteWrapper path="*" component={ Error404 } />
            </Switch>
        </Router>
    )
}