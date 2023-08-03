import './cardDetails.css'

const Details = ({ id, img, name, category, subCategory, description, price, stock, onAddToCart }) => {
    return (
        <div className='cardDetail' key={id}>
            <div className='cardDetailImageContainer' onClick={() => onShowDetails(id)}>
                <img className='cardDetailImage' src={img} alt={name} />
            </div>
            <div className='cardDetailContent'>
                <h3 className='cardDetailName'>{name}</h3>
                <p className='cardDetailCategory'>{category}</p>
                <p className="cardSubCategory" >{subCategory}</p>
                <p className='cardDetailDescription'>{description}</p>
                <p className='cardDetailPrice'>USD {price}</p>
                <p className='cardDetailStock'>{stock} left</p>
                <div className='cardDetailActions'>
                    <button onClick={() => onAddToCart(id)} className='cardButton'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Details;