import React from 'react';

import './home.css'

import Navtop from '../../components/navtop/navtop'

import HomeNews from '../../components/home-news/home-news'
import HomeProfile from '../../components/home-profile/home-profile'

import Tranferencia from '../../components/transfer-encia/transfer-encia'
import TransferHistory from '../../components/transfer-history/transfer-history'

function Home(props) {

    function chooseLeft(page) {
        if(page === "front-page")
            return (
                <HomeNews />
            )

        return (
            <Tranferencia />
        )
    }

    function chooseRight(page) {
        if(page === "front-page")
            return (
                <HomeProfile />
            )

        return (
            <TransferHistory />
        )
    }

    return (
        <div id="home">

            <Navtop />

            <div className="home-body">

                <div className="left-side">
                    {chooseLeft(props.page)}
                </div>

                <div className="right-side">
                    {chooseRight(props.page)}
                </div>

            </div>
            
        </div>
    )
}

export default Home;