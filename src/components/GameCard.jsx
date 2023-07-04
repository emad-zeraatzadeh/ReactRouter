import React from 'react';

export const GameCard = ({title, description, image}) => {


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
                <button className="info__btn">More info</button>
            </div>
        </div>
    );
};