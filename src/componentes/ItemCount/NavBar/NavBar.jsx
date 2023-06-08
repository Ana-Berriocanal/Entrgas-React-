import './NavBar.css'
import CartWidget from '../../CartWidget/CartWidget'

const NavBar = () => {
    
    return (
    <header>
        <h1>Artesanias Ada</h1>
        <nav>
        <CartWidget/>
            <ul>
                <li>Amigurumi</li>
                <li>Sección Hogar</li>
                <li>Sección Bebé</li>
                <li>Atrapasueños</li>
            </ul>
        </nav>

    </header>
    )
}

export default NavBar