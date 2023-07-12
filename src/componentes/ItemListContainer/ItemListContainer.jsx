import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getUnaCategoria } from '../../Asynckmock'
import React from 'react'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {
    const [Productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {
const funcionProductos = idCategoria ? getUnaCategoria : getProductos;
funcionProductos(idCategoria)
        .then(res => setProductos(res))
    }, [idCategoria])

    return (
        <div>
            <h3>Un lugar mágico para el regalo de tus sueños</h3>
            <h4>{greeting}</h4>
            <ItemList Productos={Productos} />
        </div>
    )
}

export default ItemListContainer