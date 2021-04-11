import React from 'react';

import './notification.css'

export default function Notification(props) {

    return (
        <div className="notification">

            <div className="not-photo">
                foto
            </div>

            <div className="not-data">
                <p className="not-from">
                    Pessoa 1 - Arroba1
                </p>
                
                <p className="not-to">
                    Transferiu 30 mangos para Arroba2
                </p>

            </div>

        </div>
    )
}