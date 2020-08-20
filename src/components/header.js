import React from 'react';
import hero from '../images/illustration-hero.svg';
const Header = () => {
    return (
        <div className='header__container' id='header'>
            <div className='header__container__box'>

                <div className='header__container--text'>
                    <h1> A Simple Bookmark Manager </h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='links'>
                        <a className='links_1' href='#extensions'>Get it on Chrome</a>
                        <a className='links_2' href='#extensions'>Get it on Firefox</a>
                    </div>
                </div>
                <div className='header__container--image'>
                    <img src={hero} alt="hero-img" ></img>
                    <div className='header__container__shape'></div>
                </div>
            </div>
        </div>
    )
}

export default Header;