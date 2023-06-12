import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavorite } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from './Logo';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><Logo /></Link>
            <ul className="pageLinks">
                <li><Link to="/about">about</Link></li>
                <li><Link to="/cart"><AiOutlineShoppingCart /></Link></li>
                <li><Link to="/favorites"><MdFavorite /></Link></li>
                <li><div onMouseOver={() => { }}><GiHamburgerMenu /></div></li>
            </ul>
        </nav>
    );
}

export default Navbar;