import React from 'react';
import {Link} from "react-router-dom";

export const GameCard = ({id, title, description, image, price}) => {


    return (
        <div className="card">
            <img src={image} alt="gamePic" className="card__img"/>
            <div className="card__info">
                <h5 className="info__title">
                    {title}
                </h5>
                <p className="info__description">
                    {description}
                </p>
                <Link className="info__btn" to={`/games/${id}`}>More info</Link>
            </div>
        </div>
    );
};


// This used for pathname state way
{/*<Link className="info__btn"*/}
{/*      to={{pathname: `/games/${id}`}}*/}
{/*      state={{id, title, description, image, price}}*/}
{/*>More info</Link>*/}