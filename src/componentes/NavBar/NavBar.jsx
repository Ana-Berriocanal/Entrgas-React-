import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [Categorias, setCategorias] = useState ("");
    const HandleCl = (Categorias) =>{
        setCategorias(Categorias);
    }

    useEffect(() =>{
        document.title = `Sección ${Categorias}`;
    },[Categorias])
    return (
    <header>
        <h1>Artesanias Ada</h1>
        <nav>
        <CartWidget/>
            <ul>
                <li onClick={()=> HandleCl("Amigurumi")}>Amigurumi</li>
                <li onClick={()=> HandleCl("Sección Hogar")}>Sección Hogar</li>
                <li onClick={()=> HandleCl("Sección Bebé")}>Sección Bebé</li>
                <li onClick={()=> HandleCl("Atrapasueños")}>Atrapasueños</li>
            </ul>
        </nav>

    </header>
    )
}

export default NavBar