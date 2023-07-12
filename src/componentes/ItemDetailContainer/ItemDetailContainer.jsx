import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../../Asynckmock";
import { ItemDetail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {
	const [filtrado, setFiltrado] = useState(null);

const {id} = useParams();

    useEffect(() => {
		getUnProducto(id)
        .then(resolve=> setFiltrado(resolve))
    }, [id])

    return (
        <div>
            <ItemDetail {...filtrado} />
        </div>
    )}
