import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';

function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <ul className="pageLinks">
                <li><Link to="/">home</Link></li>

                <li><Link to="/rings">Rings</Link></li>
                <li><Link to="/necklaces">Necklaces</Link></li>
                <li><Link to="/bracelets">Bracelets</Link></li>

                <li><Link to="/about">about</Link></li>
                <li><Link to="/checkout">cart</Link></li>
            </ul>
            <Search />
        </nav>
    );
}

export default Navbar;