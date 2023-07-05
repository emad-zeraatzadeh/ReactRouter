import {data} from "../data/data.js";
import {GameCard} from "./GameCard.jsx";

export const Games = () => {


    return (
        <div className="games">
            <div className="games__title">
                <h1 className="title__text">Our Games</h1>
            </div>
            <div className="games__card">
                {data.map(({id,title,description,image, price}) =>
                    <GameCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                    />
                )}
            </div>
        </div>
    );
};