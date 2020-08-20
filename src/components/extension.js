import React from 'react';
import google from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';
import dots from '../images/bg-dots.svg';
const Extension = () => {

    return (
        <div className='extension'>

            <div className='extension__container' id='extensions'>
                <div className='extension__container__heading'>
                    <div className='extension__container__heading-main'>
                        Download the extension
                    </div>
                    <div className='extension__container__heading-sub'>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve<br></br> got a favourite you’d like us to prioritize.
                    </div>
                </div>

                <div className='extension__container__card'>
                    <div className='extension__item'>
                        <img src={google} alt='chrome' className='logo' ></img>
                        <h3>Add to Chrome</h3>
                        <h6>Minnimum version 62</h6>
                        <img src={dots} alt='border' className='border'></img>
                        <button> Add & Install Extension</button>
                    </div>

                    <div className='extension__item'>
                        <img src={firefox} alt='chrome' className='logo'></img>
                        <h3>Add to Firefox</h3>
                        <h6>Minnimum version 55</h6>
                        <img src={dots} alt='border' className='border'></img>
                        <button> Add & Install Extension</button>
                    </div>


                    <div className='extension__item'>
                        <img src={opera} alt='chrome' className='logo'></img>
                        <h3>Add to Opera</h3>
                        <h6>Minnimum version 46</h6>
                        <img src={dots} alt='border' className='border'></img>
                        <button> Add & Install Extension</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extension