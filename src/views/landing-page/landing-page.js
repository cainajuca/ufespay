import React, { Component } from 'react';

import './landing-page.css'

import Login from '../../components/login/login'
import CreateAcc from '../../components/create-acc/create-acc'

class LandingPage extends Component {

    render() {
        return (
            <div id="landing-page">

                <CreateAcc />

                <Login />

            </div>
        )
    }
}

export default LandingPage;