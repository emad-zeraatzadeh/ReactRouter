import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => {


    return (
        <div className="header">
            <div className="header__logo">
                <img className="logo__image" src="/image/logo.jpg" alt="logo"/>
            </div>
            <div className="header__list">
                <ul className="list__items">
                    <Link to="/">
                        <li className="items__title">
                            Home
                        </li>
                    </Link>
                    <Link to="/games">
                        <li className="items__title">
                            Games
                        </li>
                    </Link>
                    <Link to="/contact-us">
                        <li className="items__title">
                            Contact us
                        </li>
                    </Link>
                    <Link to="/about-us">
                        <li className="items__title">
                            About us
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};