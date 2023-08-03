import { memo } from 'react';
import './productCard.css';

const Card = memo(({ id, img, name, category, subCategory, description, price, stock, onAddToCart, onShowDetails }) => {
    return (
        <div className='card'>
            <button className='cartButttonContainer' type='button' onClick={() => onShowDetails(id)}>
            <img className='cardImage' src={img} alt={name} />
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardSubCategory'>{subCategory}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>USD {price}</p>
                <p className='cardStock'>{stock} left</p>
            </div>
            </button>
            <div className='cardActions'>
                <button onClick={() => onAddToCart(id)} className='cardButton'>Add to cart</button>
            </div>
        </div>
    )
});

export default Card;