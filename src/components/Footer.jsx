import React from 'react';
import {FaTelegram, FaInstagram, FaLinkedin} from "react-icons/fa6";

export const Footer = () => {


    return (
        <div className="footer">
            <div className="footer__social">
                <FaTelegram/>
                <FaInstagram/>
                <FaLinkedin/>
            </div>
        </div>
    );
};