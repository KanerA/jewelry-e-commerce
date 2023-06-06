import React from 'react';
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footerText'>KAMA JEWELRY - FOLLOW me on social media for updates!</div>
            <a
                href='https://www.instagram.com/_kamajewelry/?igshid=ZDdkNTZiNTM%3D'
                target='_blank'
                rel='noreferrer'
            >
                <div className='instagramIconContainer'>
                    <svg width="0" height="0">
                        <linearGradient id="social-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#f9ce34" offset="0%" />
                            <stop stopColor="#ee2a7b" offset="50%" />
                            <stop stopColor="#6228d7" offset="100%" />
                        </linearGradient>
                    </svg>
                    <BsInstagram style={{ fill: "url(#social-gradient)" }} size={"30px"} />
                </div>
            </a>
        </div>
    );
};

export default Footer;