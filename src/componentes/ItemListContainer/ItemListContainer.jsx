import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getUnaCategoria } from '../../Asynckmock'
import React from 'react'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
    const Articulos = [
        { id: 1, nombre: "Muñeca Amigurumi", precio: 4600, },
        { id: 2, nombre: "Atrapasueños Vito", precio: 3100, img: "./img/" },
        { id: 3, nombre: "Conejo Toto de apego", precio: 4600, img: "./img/" },
        { id: 4, nombre: "Manta Milton", precio: 5600, img: "./img/" },
    ]

    return (
        <div>
            <h3>Nuestros productos más vendidos!</h3>
            <ul>
                {
                    Articulos.map(Articulos => (
                        <li key={Articulos.id}>
                            <p>{Articulos.img}</p>
                            <p>{Articulos.nombre}</p>
                            <p>${Articulos.precio}</p>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const Listacontenedora = ({ greeting }) => {
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