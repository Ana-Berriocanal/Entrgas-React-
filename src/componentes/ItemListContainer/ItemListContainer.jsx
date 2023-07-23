import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
//import { getProductos, getUnaCategoria } from '../../Asynckmock'
import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import {collection, getDocs, query, where} from 'firebase/firestore';



const ItemListContainer = ({ greeting }) => {
    const [Productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(()=>{
        const misProductos = idCategoria ? query(collection(db, "productos"), where
        ("idCat", "==", idCategoria)) : collection(db, "productos");
        getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map( doc =>  {
                const data = doc.data();    
                return {id: doc.id, ...data}
            })
        })
        .catch(error => console.log(error))
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