import { useState } from "react";
import React from 'react'


//RECIBO POR PROPS Y DESESTRUCTURO  {{stock}}  OTRAS FORMAS 👉/// (props.stock) ///   const {stock} = props  /// const stock = props.stock
export const ItemCount = ({ stock }) => {
	//ESTADO PARA CONTROLAR LA CANTIDAD, INICIO EN 1
	const [initial, setInitial] = useState(1);

	//ESTADO PARA CONTROLAR CUANDO SE ALCANZO EL MAXIMO EN STOCK
	const [errorStock, setErrorStock] = useState(false);

	//FUNCION PARA MANEJAR EL AGREGAR O RESTAR CANTIDAD A COMPRAR
	const handleClick = (value) => {
		if (initial + value > 0 && initial + value <= stock) {
			setInitial(initial + value);
			setErrorStock(false);
		} else {
			initial + value >= stock && setErrorStock(true);
		}
	};

	return (
		<div className='cajaContenedora'>
			<div className='container--itemCount--buttons'>
				<button
					className='itemCount--button'
					onClick={() => handleClick(-1)}>
					-
				</button>
				<div className='itemCount--count'>{initial}</div>
				<button
					className='itemCount--button'
					onClick={() => handleClick(1)}>
					+
				</button>
			</div>
			<button className='itemCount--buttonCart'>Add to Cart</button>
			{errorStock && (
				<div className='itemCount--error'>
					Se alcanzo el máximo disponible
				</div>
			)}
		</div>
	);
};
export default ItemCount