import React from 'react';
import logo from '../images/logo-bookmark.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__container--left'>
                    <ul>
                        <li><img src={logo} alt='logo'></img></li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>

                    </ul>
                </div>

                <div className='footer__container--right'>
                    <ul>
                        <a href='www.facebook.com' ><FaFacebookF /></a>
                        <a href='www.twitter.com'><FaTwitter /></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer