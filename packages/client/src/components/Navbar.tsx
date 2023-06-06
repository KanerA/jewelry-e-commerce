import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';

function Navbar() {
    return (
        <nav className="navbar bg-green border-gray-200 dark:bg-gray-900">
            <div className="bg-green max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/"><Logo /></Link>
                <ul className="pageLinks flex justify-evenly bg-green">
                    <li><Link to="/about"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">about</span></Link></li>
                    <li><Link to="/cart"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">cart</span></Link></li>
                    <li><Link to="/favorites"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">favorites</span></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;