import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { Listacontenedora } from './componentes/ItemListContainer/ItemListContainer';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Amigurumis from './componentes/Amigurumis/Amigurumis';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Amigurumis/:id" element={<Amigurumis />} />
          <Route path="*" element={<h2>Oops.. Fuera de servicio</h2>} />
          <Route path="/categoria/:idCategoria" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
          <Listacontenedora />
    </div>
  )
}


export default App;
