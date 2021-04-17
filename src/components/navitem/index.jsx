import React, { useState } from 'react';

import './navitem.css';

export default function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#!"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {icon}
      </a>

      {open && children}
    </li>
  );
}
