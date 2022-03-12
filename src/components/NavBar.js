import React from 'react';
import cartWidget from './CartWidget';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav'>
            <NavLink to="/categoria/1" className='nav__link'>cat1</NavLink>
            <NavLink to="/categoria/2" className='nav__link'>cat2</NavLink>
            <NavLink to="/categoria/3" className='nav__link'>cat3</NavLink>
            <cartWidget />
           

        </nav>
    );
}

export default NavBar;