import React from 'react';

import NavItem from '../navitem/navitem'
import Menu from '../menu/menu'

import './navtop.css'

import MenuIcon from '@material-ui/icons/Menu';

export default function Navtop(props) {

    return (
        <nav className='navbar'>

            <ul className='navbar-nav'>

                <h1>UfesPay</h1>

                {/* <NavItem icon={<ExitToAppIcon />}/> */}

                <NavItem className="nav-item" icon={<MenuIcon />}>
                    <Menu />
                </NavItem>
            </ul>
        </nav>
        // <nav className='navbar'>

        //     <ul className='navbar-nav'>

        //         <h1>UfesPay</h1>

        //         {/* <NavItem icon={<ExitToAppIcon />}/> */}

        //         <NavItem icon={<MenuIcon />}>
        //             <Menu />
        //         </NavItem>
        //     </ul>
        // </nav>
    )
}

