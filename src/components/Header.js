import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>Mi E-Commerce</h1>
            </Link>
            <Link to="/CartWidget">
                <span className="material-icons">
                    shopping_cart
                </span>
            </Link>
            <NavBar />
        </header>
    )
}

export default Header