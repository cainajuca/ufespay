import React from 'react';

import '../modal.css';

import Navtop from '../../components/navtop';

export default function Transaction() {
  return (
    <div id="transaction">
      <Navtop />

      <div className="body">
        <div className="left-side">{/* <Tranferencia /> */}</div>

        <div className="right-side">{/* <TransferHistory /> */}</div>
      </div>
    </div>
  );
}
