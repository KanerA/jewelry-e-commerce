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
                <li><Link to="/cart"><AiOutlineShoppingCart size={20} /></Link></li>
                <li><Link to="/favorites"><MdFavorite size={20} /></Link></li>
                <li><div onMouseOver={() => { }}><GiHamburgerMenu size={20} /></div></li>
            </ul>
        </nav>
    );
}

export default Navbar;