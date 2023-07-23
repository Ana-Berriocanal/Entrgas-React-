import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";



export const ItemDetailContainer = () => {
	const [filtrado, setFiltrado] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        const nuevoDoc = doc(db, "productos", id);
        getDoc(nuevoDoc)
        .then(res=>{
            const data = res.data();
            const nuevoProducto = {id:res.id, ...data}
            setFiltrado(nuevoProducto);
        })
        .catch(e=>console.log(e))
    }, [id])

    return (
        <div>
            <ItemDetail {...filtrado} />
        </div>
    )}
