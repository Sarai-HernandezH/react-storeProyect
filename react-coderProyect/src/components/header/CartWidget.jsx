import React from "react";
import './style.css';
import carritoImagen from '/carrito.svg';


const CartWidget = () =>{


    return(
        <div className="shoppingCart">
            <div className="cantidad">3</div>
            <img className="carrito" src={carritoImagen} alt="Imagen carrito" />
        </div>

    )
}

export default CartWidget;