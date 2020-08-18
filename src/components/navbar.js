import React from 'react';
import logo from '../images/logo-bookmark.svg';

const Navbar = () => {
    return (

        <div className='navbar'>
            <div className='navbar_container'>

                <div className='navbar--left'>
                    <img src={logo} alt='logo'></img>
                </div>
                <div className='navbar--right'>
                    <ul className='navbar--right__links'>
                        <li>FEATURES</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                        <li><a href=''>LOGIN</a></li>

                    </ul>
                </div>
            </div>

        </div>

    )
}


export default Navbar