import React from 'react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import MenuItem from '../menuitem';

import './menu.css';

export default function Menu() {
  return (
    <div className="menu">
      <MenuItem whereTo="home" leftIcon={<HomeIcon />}>
        Página Inicial
      </MenuItem>

      <MenuItem whereTo="transfer" leftIcon={<PaymentIcon />}>
        Realizar Transferência
      </MenuItem>

      <MenuItem whereTo="" leftIcon={<ExitToAppIcon />}>
        Sair
      </MenuItem>
    </div>
  );
}
