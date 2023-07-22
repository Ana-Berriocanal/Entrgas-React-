import React from 'react'
import { useParams} from 'react-router-dom'


const SeccionBebe = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Sección Bebé</h2>
            <strong>Artículo buscado: {id} </strong>
        </div>
    )
}

export default SeccionBebe