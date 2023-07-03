import Item from "../Item/Item"



const ItemList = ({Productos}) => {
  return (
    <div>
      {Productos.map (prod => <Item key={prod.id} {...prod}/> )}
    </div>
    )
}

export default ItemList