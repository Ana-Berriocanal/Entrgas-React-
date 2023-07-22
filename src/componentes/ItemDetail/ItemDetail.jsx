import { ItemCount } from "../ItemCount/ItemCount";
import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const ItemDetail = ({id, nombre, precio, img, stock}) => {
	const [agregarcantidad, setAgregarcantidad] = useState(0);
	const {agregarProducto} = useContext(CarritoContext);

	const IncrementarCantidad =(cant) =>{
		setAgregarcantidad(cant);
		const item = {id, nombre, precio};
		agregarProducto(item, cant);
	}

	return (

		<div className="CajaContenedora">
			<img src={img} alt={nombre} />
			<br></br>
			<h2> {nombre} </h2>
			<br></br>
			<h3>ID: {id} </h3>
			<br></br>
			<h3>Precio: ${precio}</h3>
			<br></br>
			{
			agregarcantidad > 0 ? (<Link to="/Cart"> Terminar compra </Link>) : (<ItemCount inicial = {1} stock= {stock} funcionagregar={IncrementarCantidad} />) }
		</div>
			
	)
}