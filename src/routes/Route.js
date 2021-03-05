import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
// import authApi from '../services/auth.api'

export function RouteWrapper ({
    component: Component,
    // eslint-disable-next-line no-unused-vars
    isPrivate,
    ...rest
}) {
    /**
     * If not included on both previous cases, redirect user to the desired route
    */
   return <Route {  ...rest } component={ Component } />
}

export function PrivateRoute ({ component: Component, ...rest }) {

    let authorized = false

    if (JSON.parse(localStorage.getItem('user')) === null) {
        authorized = false
    } else {
        // const data = authApi.getCurrentUser()
        // authorized = data.authorized
    }

    return (
        <Route 
            { ...rest }
            render={ ({ location }) => 
            authorized ? (
                    <Component />
                ) : (
                    <Redirect
                        to={ 
                            {
                                pathname: '/login',
                                state: { from: location }
                            } 
                        }
                    />
                )
            }
        />
    )
}

// eslint-disable-next-line react/prop-types
export function AdminRoute ({ component: Component, ...rest }) {
    let authorized = false
    let isAdmin = false

    if (JSON.parse(localStorage.getItem('user')) === null) {
        authorized = false
    } else {
        // const data = authApi.getCurrentUser()
        // authorized = data.authorized
        // data.data.account_type == 1 ? isAdmin = true : isAdmin = false
    }

    return (
        <Route 
            { ...rest }
            render={ ({ location }) => 
            authorized && isAdmin ? (
                    <Component />
                ) : (
                    <Redirect
                        to={ 
                            {
                                pathname: '/loginAdmin',
                                state: { from: location }
                            } 
                        }
                    />
                )
            }
        />
    )
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.any
}

RouteWrapper.defaultProps = {
    isPrivate: false
}

PrivateRoute.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.func ]).isRequired
}