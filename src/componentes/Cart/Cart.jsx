import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import React from 'react'
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const{carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if (cantidadTotal === 0){
        return(
          <div>
            <h2> no hay productos en el carrito actualmente</h2>
            <Link to="/"> Ver productos</Link>
          </div>
            
        )
    }
    return(
        <div>
            {carrito.map(producto => <CartItem key={producto.id}{...producto}/>)}
            <h3>Total: $ {total}</h3>
            <h3>Cantidad: {cantidadTotal}</h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout">Terminar la compra</Link>
        </div>
    )
}

export default Cart