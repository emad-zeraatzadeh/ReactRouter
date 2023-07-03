import React from 'react';
import {FaTelegram, FaInstagram, FaLinkedin} from "react-icons/fa6";

export const Footer = () => {


    return (
        <div className="footer">
            <div className="footer__social">
                <FaTelegram size={50} style={{color: "#DAFFFB", cursor: "pointer"}}/>
                <FaInstagram size={50} style={{color: "#DAFFFB", marginLeft: "30px", cursor: "pointer"}}/>
                <FaLinkedin size={50} style={{color: "#DAFFFB", marginLeft: "30px", cursor: "pointer"}}/>
            </div>
            <div className="footer__copyRight">
                <span className="copyRight__title">
                    &copy; All rights served for Nova games
                </span>
            </div>
        </div>
    );
};