import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () => {


    return (
        <div className="header">
            <div className="header__logo">
                <img className="logo__image" src="/image/logo.jpg" alt="logo"/>
            </div>
            <div className="header__list">
                <ul className="list__items">
                    <li>
                        <NavLink className="items__title" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="items__title" to="/games">Games</NavLink>
                    </li>
                    <li>
                        <NavLink className="items__title" to="/contact-us">Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink className="items__title" to="/about-us">About us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};