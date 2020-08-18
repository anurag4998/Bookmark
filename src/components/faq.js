import React from 'react';
import iconarrow from '../images/icon-arrow.svg';


const Faq = () => {
    return (
        <div className='faq'>

            <div className='faq__container'>
                <div className='faq__container__heading'>

                    <div className='faq__container__heading-main'>
                        Frequently Asked Questions
                    </div>
                    <div className='faq__container__heading-sub'>
                        Here are some of our FAQs. If you have any other questions<br></br> you’d like answered please feel free to email us
                    </div>
                </div>
                <div className='faq__container__questions'>
                    <div className='faq__container__questions--style'>
                        <p>What is Bookmark?</p>
                        <button><img src={iconarrow} alt='arrow'></img></button>
                    </div>
                    <div className='faq__container__questions--style'>
                        <p>How can I request a new browser? </p>
                        <button><img src={iconarrow} alt='arrow'></img></button>
                    </div>
                    <div className='faq__container__questions--style'>
                        <p>Is there a mobile app?</p>
                        <button><img src={iconarrow} alt='arrow'></img></button>
                    </div>
                    <div className='faq__container__questions--style'>
                        <p>What about other Chromium browsers? </p>
                        <button><img src={iconarrow} alt='arrow'></img></button>
                    </div>
                </div>
                <div className='faq__container__button'>
                    <button>More Info</button>
                </div>


            </div>

        </div>


    )
}

export default Faq;