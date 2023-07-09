import React, {useEffect, useState} from 'react';
import {Form} from "./Form.jsx";

export const ContactUs = () => {

    return (
        <div className="contact-us">
            <div className="contact-us__title">
                <h1 className="title__text">Contact us</h1>
            </div>
            <div className="contact-us__elements">
                <Form/>
            </div>
        </div>
    );
};