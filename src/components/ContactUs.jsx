import React from 'react';

export const ContactUs = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact-us">
            <div className="contact-us__title">
                <h1 className="title__text">Contact us</h1>
            </div>
            <div className="contact-us__elements">
                <form onSubmit={submitHandler} className="elements__form">
                    <input className="form__input" placeholder="Your name" type="text"/>
                    <input className="form__input" placeholder="Your email" type="text"/>
                    <textarea className="form__input" placeholder="Your message"></textarea>
                    <button className="form__btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};