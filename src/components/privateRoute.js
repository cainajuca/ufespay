import React, { Component } from 'react'
import { Route, Navigate } from 'react-router'

class ProtectedRoute extends Component {

    render() {
        return (

            <div>
                {
                    this.props.authorize ?
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