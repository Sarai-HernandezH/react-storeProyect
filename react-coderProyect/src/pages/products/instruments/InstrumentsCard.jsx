import React from "react";
import './instrumentsCards.css';



const InstrumentsCard =({id, name, price, img, stock, description, onShowDetails }) => {

    return(
        <>
        <div key={id} className="card" onClick={() => onShowDetails(id)}>
            <img className="cardImage" src={img} alt={name} />
            <div className="cardContent">
                <h3 className="cardName">{name}</h3>
                <p className="cardDescription">{description}</p>
                <p className="cardPrice">USD {price}</p>
                <p className="cardStock">{stock} left</p>
            </div>
            <div className="cardActions">
                <button className="cardButton" >
                    Add to cart
                </button>
            </div>
        </div>
        </>

    )
}

export default InstrumentsCard;