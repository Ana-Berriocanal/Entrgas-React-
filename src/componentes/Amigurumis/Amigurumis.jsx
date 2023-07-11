import React from 'react'
import { useParams} from 'react-router-dom'


const Amigurumis = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Sección Amigurumis</h2>
            <strong>Artículo buscado: {id} </strong>
        </div>
    )
}

export default Amigurumis