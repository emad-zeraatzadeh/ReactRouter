import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

export const GameSingle = () => {

    const location = useLocation();
    const title = location.state.title;
    const description = location.state.description;
    const price = location.state.price;
    const image = location.state.image;

    return (
        <div className="gameSingle">
            <div className="gameSingle__content">
                <div className="content__info">
                    <h5 className="info__title">
                        {title}
                    </h5>
                    <p className="info__description">
                        {description}
                    </p>
                    <span className="info__price">
                        {price}$
                    </span>
                    <button className="info__buy">Buy</button>
                    <Link className="content__back" to="/games">
                        Back to games
                    </Link>
                </div>
                <div className="content__image">
                    <img src={image} alt="gamePic" className="image__pic"/>
                </div>
            </div>
        </div>
    );
};