import React from 'react';

import './styles.css'

import Notification from '../notification/notification'
import TransactionCard from '../transaction-card'

export default function News(props) {

    const url1 = "https://instagram.fvix1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/106703191_286526825887099_8976634473752735876_n.jpg?tp=1&_nc_ht=instagram.fvix1-1.fna.fbcdn.net&_nc_ohc=1XwLaA_XcJIAX_BsIkT&tn=GulQFohpfyw9_kYe&edm=ABfd0MgAAAAA&ccb=7-4&oh=0c1063f4e2238ca6bddb3d42fd11fae4&oe=609D358A&_nc_sid=7bff83"
    const url2 = "https://instagram.fvix1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/65272082_456845131770016_6898801497056739328_n.jpg?tp=1&_nc_ht=instagram.fvix1-1.fna.fbcdn.net&_nc_ohc=H-CaldTOdp4AX8KeE-6&edm=ABfd0MgAAAAA&ccb=7-4&oh=73e917943b4ec1c6b3b8f1a4166fddf9&oe=609CD6D8&_nc_sid=7bff83"

    return (
        <div className="news">

            <h2>Últimas Notificações</h2>

            <div className="notification-list">
                <Notification />
                <Notification />
                <TransactionCard url={url1}/>
                <TransactionCard url={url2}/>
                <TransactionCard url={url2}/>
                <Notification />
            </div>
                

            {/* 
                expor lista d json
                tem no occurrence
            */}

        </div>
    )
}