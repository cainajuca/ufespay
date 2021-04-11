import React from 'react';

import './home.css'

import Navtop from '../../components/navtop/navtop'
// import Navleft from '../../components/navleft/navleft'
import Notification from '../../components/notification/notification'

function Home(props) {

    return (
        <div id="home">

            <Navtop />
            {/* <Navleft /> */}

            <div className="home-body">
                <div className="news">
                    <h2>Últimas Notificações</h2>

                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />

                    {/* 
                        pesquisar como expor lista d json
                        tem no occurrence
                    */}

                </div>

                <div className="profile">
                    <h1>- perfil -</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Home;