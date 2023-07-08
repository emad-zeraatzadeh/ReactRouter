import React from 'react';
import {FaTelegram, FaInstagram, FaLinkedin} from "react-icons/fa6";

export const Footer = () => {


    return (
        <div className="footer">
            <div className="footer__social">
                <FaTelegram className="social__icon"/>
                <FaInstagram className="social__icon"/>
                <FaLinkedin className="social__icon"/>
            </div>
            <div className="footer__copyRight">
                <span className="copyRight__title">
                    &copy; All rights served for Nova games
                </span>
            </div>
        </div>
    );
};