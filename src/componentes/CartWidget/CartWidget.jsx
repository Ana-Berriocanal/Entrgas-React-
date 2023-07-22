import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const Carrito ="https://previews.123rf.com/images/vectoraa/vectoraa1609/vectoraa160900985/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-dise%C3%B1o-plano.jpg"

    return (
    <div>
        <Link to="/Cart">
            <img src={Carrito} alt="Carrito" />
            {
                cantidadTotal > 0 && <strong className='Strongcarrito'> {cantidadTotal} </strong>
            }
        </Link>
        
    </div>
    )
}

export default CartWidget