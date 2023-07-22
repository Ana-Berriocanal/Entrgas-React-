import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState } from 'react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const NavBar = () => {
    const [Categorias, setCategorias] = useState("");
    const HandleCl = (Categorias) => {
        setCategorias(Categorias);
    }
    useEffect(() => {
        document.title = `Sección ${Categorias}`;
    }, [Categorias])

    return (
        <header>
            <Link className="title" to={"/"}> <h1>Artesanias Ada</h1> </Link>

            <nav>
                <CartWidget />
                <ul>
                    <li onClick={() => HandleCl("Amigurumi")}>
                        <NavLink className="classLink" to={"/categoria/2"}> Amigurumis </NavLink>
                    </li>

                    <li onClick={() => HandleCl("Sección Hogar")}>
                        <NavLink className="classLink" to={"/Seccionhogar"}> Sección Hogar </NavLink>
                    </li>

                    <li onClick={() => HandleCl("Sección Bebé")}>
                        <NavLink className="classLink" to={"/categoria/3"}> Sección Bebé </NavLink>
                    </li>

                    <li onClick={() => HandleCl("Atrapasueños")}>
                        <NavLink className="classLink" to={"/atrapasueños"}> Atrapasueños </NavLink>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default NavBar