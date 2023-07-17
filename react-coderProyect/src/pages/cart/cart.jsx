import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../context/cart-context'

function Cart() {
    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total, getTotalItemQuantity } = useContext(CartContext)
    return (
        <div>
            <div className='cartContainer'>
                <h2>Cart</h2>
                {cart.length === 0 && <h3>Cart is empty</h3>}
                {
                    cart?.length > 0 && cart.map((instrument) => (
                        <div key={instrument.id} className='cartItem'>
                            <div className='cardImageContainer'>
                                <img className='cardImage' src={instrument.img} alt={instrument.name} />
                            </div>
                            <div className='cartContentContainer'>
                                <p className='cartProductName'>{instrument.name}</p>
                                <p className='cartPrice'>USD {instrument.price}</p>
                                <p className='cartQuantity'>qty: {instrument.quantity}</p>
                                <p className='cartStock'>{instrument.stock} left</p>
                                <div className='cartActions'>
                                    <button onClick={() => onAddToCart(instrument.id)} className='cartButttonAdd'>+</button>
                                    <button onClick={() => onDecreaseItem(instrument.id)} className='cartButttonDecrease'>-</button>
                                    <button onClick={() => onRemoveItem(instrument.id)} className='cartButttonRemove'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    cart?.length > 0 && (
                        <div className='cartDetailActions'>
                            <p className='cartTotal'>Total: USD {total}</p>
                            <p className='cartItemQuantity'>Total Items: {getTotalItemQuantity()}</p>
                            <button className='cartButttonCheckout'>Checkout</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart