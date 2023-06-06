import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><Logo /></Link>
            <ul className="pageLinks">
                <li><Link to="/about">about</Link></li>
                <li><Link to="/cart">cart</Link></li>
                <li><Link to="/favorites">favorites</Link></li>
            </ul>
            <Search />
        </nav>
    );
}

export default Navbar;