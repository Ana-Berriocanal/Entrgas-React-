import './ItemListContainer.css'
import { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../Asynckmock'



const ItemListContainer = () => {
const Articulos =[
    {id: 1, nombre:"Muñeca Amigurumi",precio:4600},
    {id: 2, nombre:"Atrapasueños Vito",precio:3100},
    {id: 3, nombre:"Conejo Toto de apego",precio:4600},
    {id: 4, nombre:"Manta Milton",precio:5600},
]

    return (
        <div>
            <h3>Nuestros productos más vendidos!</h3>
            <ul>
                {
                    Articulos.map(Articulos =>(
                        <li key={Articulos.id}>
                            <p>{Articulos.nombre}</p>
                            <p>${Articulos.precio}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const Listacontenedora = () =>{
    const [Productos, setProductos] = useState([]);
    useEffect(()=>{
        getProductos()
        .then (rta => setProductos(rta))
    },[])
    return(
        <div>
        <h3>Un lugar mágico para el regalo de tus sueños</h3>
        <ItemList Productos={Productos} />
        </div>
    )
}

export default ItemListContainer