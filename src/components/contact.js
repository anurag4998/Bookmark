import React from 'react';


const Contact = () => {
    return (

        <div className='contact'>
            <div className='contact__container'>
                <div className='contact__container--subheading'>
                    35,000+ already joined
                 </div>
                <div className='contact__container--heading'>
                    Stay up-to-date with what <br></br> we're doing
                </div>
                <div >
                    <form className='contact__container__input'>
                        <input type="email" name="email" placeholder="Type an email address" >
                        </input>
                        <button type="submit">Contact Us</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact