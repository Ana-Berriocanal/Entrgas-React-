import { ItemCount } from "../ItemCount/ItemCount";
import React from 'react'

export const ItemDetail = ({id, nombre, precio, img}) => {
	return (

		<div>
			<h2>{nombre}</h2>
			<br></br>
			<h3>Precio: {precio}</h3>
			<br></br>
			<img src="img" alt="img" />
		</div>
	)
}