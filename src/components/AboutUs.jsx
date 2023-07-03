import React from 'react';

export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__title">
                <h1 className="title__text">About us</h1>
            </div>
            <div className="about-us__element">
                <div className="about-us__para">
                    <p className="para__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consectetur corporis
                        dolorem ducimus eaque esse hic itaque labore laboriosam nostrum placeat, quisquam reiciendis
                        repudiandae, rerum saepe sed vero? Architecto consequuntur dicta fugiat itaque iusto libero non odit
                        praesentium quibusdam, voluptates? Alias aliquid, beatae distinctio dolorem enim esse incidunt
                        maxime, nam, nostrum optio quod saepe unde voluptatum? Accusamus accusantium aliquam amet corporis
                        cumque cupiditate dolor dolorum ea excepturi facere fugit ipsam labore maiores, minus, nihil numquam
                        pariatur perferendis perspiciatis placeat quaerat similique sint sunt tempore temporibus veniam
                        veritatis voluptatibus? Adipisci aliquam aspernatur et maxime natus nobis nostrum, provident soluta
                        tempore.
                    </p>
                </div>
                <div className="about-us__image">
                    <img src="/image/aboutus.jpg" alt="pic" className="image__pic"/>
                </div>
            </div>
        </div>
    );
};