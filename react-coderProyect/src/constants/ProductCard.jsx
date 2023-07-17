import React from "react";
import './productCard.css';



const ProductCard =({ id, name, category, subCategory, price, img, stock, onShowDetails, onAddToCart,  onFilter}) => {

    return(
        <div className='card'>
            <button className='cartButttonContainer' type='button' onClick={() => onShowDetails(id)}>
                <img className="cardImage" src={img} alt={name} />
                <div className="cardContent">
                    <h3 className="cardName">{name}</h3>
                    <p className="cardCategory" >{category}</p>
                    <p className="cardSubCategory" onClick={() => onFilter()}>{subCategory}</p>
                    <p className="cardPrice">USD {price}</p>
                    <p className="cardStock">{stock} left</p>
                </div>
            </button>
            <div className="cardActions">
                <button onClick={() => onAddToCart(id)} className="cardButton">
                    Add to cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard;