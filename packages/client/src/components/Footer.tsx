import React from 'react';
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer">
            KAMA JEWELRY - FOLLOW me on instagram for updates!
            <a href='https://www.instagram.com/_kamajewelry/?igshid=ZDdkNTZiNTM%3D' target='_blank' rel='noreferrer'><BsInstagram size={"25px"} /></a>
        </div>
    );
};

export default Footer;