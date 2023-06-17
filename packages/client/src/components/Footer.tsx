import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footerText'>KAMA JEWELRY - FOLLOW me on social media for updates!</div>
            <div className="footerLinksContainer center">
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
                <div className="whatsappContainer">
                    <Link to="https://wa.me/972546491136" target='blank'>
                        <svg width="0" height="0">
                            <linearGradient id="whatsappIcon" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#5FFC7B" offset="0%" />
                                <stop stopColor="#28D146" offset="100%" />
                            </linearGradient>
                        </svg>
                        <BsWhatsapp style={{ fill: "url(#whatsappIcon)" }} size={"30px"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;