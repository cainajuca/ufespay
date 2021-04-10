import React from 'react';

import './landing-page.css'

import Login from '../../components/login/login'
import CreateAcc from '../../components/create-acc/create-acc'

function LandingPage(props) {

    return (
        <div id="landing-page">

            <CreateAcc />

            <Login auth={(login) => {props.callback(login)}}/>

        </div>
    )
}

export default LandingPage;