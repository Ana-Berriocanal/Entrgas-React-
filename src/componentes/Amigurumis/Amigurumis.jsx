import React from 'react'
import { useParams} from 'react-router-dom'


const Amigurumis = () => {
    const {productos} = useParams;

    return (
        <div>
            <h2>Sección Amigurumis</h2>
            <strong>Artículo buscado: {productos} </strong>
        </div>
    )
}

export default Amigurumis