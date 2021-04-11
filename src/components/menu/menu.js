import React from 'react';

import MenuItem from '../menuitem/menuitem'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PaymentIcon from '@material-ui/icons/Payment';

import './menu.css'

export default function Menu(props) {

    return (
        <div className="menu">

            <MenuItem
                whereTo="home/transfer-page"
                leftIcon={<PaymentIcon />}
                >Realizar Transferência
            </MenuItem>


            <MenuItem
                whereTo=""
                leftIcon={<ExitToAppIcon />}
                >Sair
            </MenuItem>


            {/* <MenuItem>My Profile</MenuItem> */}
        </div>
    )
}