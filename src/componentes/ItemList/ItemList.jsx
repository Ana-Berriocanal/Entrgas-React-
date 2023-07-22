import Item from "../Item/Item"
import React from 'react'
import "./ItemList.css"

const ItemList = ({Productos}) => {
  return (
    <div className="contenedorproductos">
      {Productos.map (prod => <Item key={prod.id} {...prod}/> )}
    </div>
    )
}

export default ItemList