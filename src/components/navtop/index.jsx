/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Money, AttachMoney } from '@material-ui/icons';

import './navtop.css';
import { useAuth } from '../../hooks/auth';

export default function Navtop() {
  const { logOut } = useAuth();
  return (
    <div className="navbar">
      <Link to="/home" id="go-home">
        UfesPay
      </Link>

      <div className="actions">
        <Link className="action" to="/home">
          <Home />
          <span className="action-label">Home</span>
        </Link>
        <Link className="action" to="/transfer">
          <Money />
          <span className="action-label">Pagar</span>
        </Link>
        <button type="button" className="action" onClick={logOut}>
          <AttachMoney />
          <span className="action-label">Log Out</span>
        </button>
      </div>
    </div>
  );
}
