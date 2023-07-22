import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Amigurumis/:id" element={<ItemDetailContainer />} />
            <Route path="/SeccionBebe/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>Oops.. Fuera de servicio</h2>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CarritoProvider>
        
      </BrowserRouter>
    </div>
  )
}


export default App;
