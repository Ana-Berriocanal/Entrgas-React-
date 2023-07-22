import { useState } from "react";
import React from 'react'



export const ItemCount = ({ inicial, stock, funcionagregar }) => {
	const [initial, setInitial] = useState(inicial);

	const [errorStock, setErrorStock] = useState(false);

	const incrementar =() =>{
		if (initial < stock){
			setInitial(initial + 1);
		}
	}

	const decrementar =() =>{
		if (initial > inicial){
			setInitial(initial - 1);
		}
	}

	/*const handleClick = (value) => {
		if (initial + value > 0 && initial + value <= stock) {
			setInitial(initial + value);
			setErrorStock(false);
		} else {
			initial + value >= stock && setErrorStock(true);
		}
	}; */

	return (
		<div className='cajaContenedora'>
			<div className='container--itemCount--buttons'>
				<button
					className='itemCount-button'
					onClick={() => decrementar(-1)}>
					-
				</button>
				<div className='itemCount--count'>{initial}</div>
				<button
					className='itemCount-button'
					onClick={() => incrementar(1)}>
					+
				</button>
			</div>
			<button className='itemCount--buttonCart' onClick={() => funcionagregar(initial) }>¡Lo quiero!</button>
			{errorStock && (
				<div className='itemCount--error'>
					Se alcanzo el máximo disponible
				</div>
			)}
		</div>
	);
};
export default ItemCount