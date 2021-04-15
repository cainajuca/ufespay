import React from 'react';

import '../modal.css'

import Navtop from '../../components/navtop/navtop'
import Tranferencia from '../../components/transfer-encia/transfer-encia'
import TransferHistory from '../../components/transfer-history/transfer-history'

export default function Transaction() {

    return (
        <div id="transaction">

            <Navtop />

            <div className="body">

                <div className="left-side">
                    <Tranferencia />
                </div>

                <div className="right-side">
                    <TransferHistory />
                </div>                

            </div>
        </div>
    )
}