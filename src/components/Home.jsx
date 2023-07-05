import React from 'react';
import {Link} from "react-router-dom";


export const Home = () => {


    return (
        <div className="landing">
            <div className="landing__text">
                <h1 className="text__title">
                    Nova Games
                </h1>
                <h2 className="text__description">
                    Always one step ahead
                </h2>
                <Link className="text__btn" to="/games">our games</Link>
            </div>
        </div>
    );
};