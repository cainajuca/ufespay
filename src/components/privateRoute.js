import React, { Component } from 'react'
import { Route, Navigate } from 'react-router'

class ProtectedRoute extends Component {

    constructor(props) {
        super(props)

        this.state = {
            element: null,
            path: '',

            isLoggedIn: true
        }
    }

    render() {
        
        return (

            <div>
                {
                    this.props.auth ?
                    (
                        <Route path='home' element={this.props.element} />
                    )
                    :
                    (
                        <Navigate to={"/"} />
                    )
                }
            </div>
        )
    }
}

export default ProtectedRoute