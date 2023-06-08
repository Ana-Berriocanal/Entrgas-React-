import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const incrementar = () =>{
        setContador (contador + 1);
    }

    const decrementar = () =>{
        setContador (contador - 1);
    }

    return (
        <div>
            <button onClick={incrementar}> + </button>
            <p>Cantidad de productos ingresados</p>
            <button onClick={decrementar}> - </button>
        </div>
    )
}

export default ItemCount