import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Amigurumis/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Oops.. Fuera de servicio</h2>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
