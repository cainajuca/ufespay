import React from 'react';

import './menuitem.css'

export default function MenuItem(props) {

    function handleLogout() {
        localStorage.setItem("autoriza", false)
    }

    return (
        <div>

            <a href="/" className="menu-item" onClick={handleLogout}>
                <span className="icon-left"> {props.leftIcon}</span>

                { props.children }

                <span className="icon-right"> {props.rightIcon}</span>
            </a>

        </div>
    )
}