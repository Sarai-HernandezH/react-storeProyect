import React from "react";
import './vinylsCards.css';


const VinylsCard =({ id, name, price, img, stock, onShowDetails }) => {

    return(
        <>
        <div key={id} className="card" onClick={() => onShowDetails(id)}>
            <img className="cardImage" src={img} alt={name} />
            <div className="cardContent">
                <h3 className="cardName">{name}</h3>
                <p className="cardPrice">USD {price}</p>
                <p className="cardStock">{stock} left</p>
            </div>
            <div className="cardActions">
                <button onClick={() => onAddToCart(id)} className="cardButton">
                    Add to cart
                </button>
            </div>
        </div>
        </>

    )
}

export default VinylsCard;