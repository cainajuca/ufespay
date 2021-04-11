import React from 'react';

import './home-news.css'

import Notification from '../../components/notification/notification'

export default function HomeNews(props) {

    return (
        <div className="home-news">

            <h2>Últimas Notificações</h2>

            <Notification />
            <Notification />
            <Notification />
            <Notification />

            {/* 
                expor lista d json
                tem no occurrence
            */}

        </div>
    )
}