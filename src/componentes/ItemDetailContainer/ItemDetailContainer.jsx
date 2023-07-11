import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../../Asynckmock";



export const ItemDetailContainer = () => {
	const [Filtrado, setFiltrado] = useState(null);

const {idItem} = useParams();

    useEffect(() => {
		getUnProducto(4)
        .then(resolve=> setFiltrado(resolve))
    }, [idItem])

    return (
        <div>
            <itemDetail {...Filtrado} />
        </div>
    )}
