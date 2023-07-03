import './CartWidget.css';
import React from 'react'


const CartWidget = () => {

    const Carrito ="https://previews.123rf.com/images/vectoraa/vectoraa1609/vectoraa160900985/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-dise%C3%B1o-plano.jpg"

    return (
    <div>
        <img src={Carrito} alt="Carrito" />
        <strong className='Strongcarrito'>10</strong>
    </div>
    )
}

export default CartWidget