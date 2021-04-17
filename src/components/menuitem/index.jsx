import React from 'react';
import { Link } from 'react-router-dom';

import './menuitem.css';

export default function MenuItem({ whereTo, leftIcon, rightIcon, children }) {
  function handleClick() {
    if (whereTo === '') {
      localStorage.setItem('autoriza', false);
    }
  }

  return (
    <div>
      <Link to={`/${whereTo}`} className="menu-item" onClick={handleClick}>
        <span className="icon-left"> {leftIcon}</span>

        {children}

        <span className="icon-right"> {rightIcon}</span>
      </Link>
    </div>
  );
}
