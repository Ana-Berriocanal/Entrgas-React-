import { useState } from "react";
import { createContext } from "react";
import React from "react";

export const CarritoContext = createContext({
    carrito: [],
    cantidad: 0,
    total: 0
})

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]); 
    console.log(carrito);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setcantidadTotal] = useState(0);

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id); 
        if (!productoExistente){
            setCarrito(prev => [...prev, {item, cantidad}]) 
            setcantidadTotal(prev => prev + cantidad); 
            setTotal(prev => prev + (item.precio * cantidad)); 
        }else{ 
            const carritoActualizado = carrito.map( prod =>{
                if(prod.item.id === item.id){
                    return{...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setTotal(prev => prev + (prev.precio * cantidad));
            setcantidadTotal(prev => prev + cantidad);
        }
    }

    const eliminarProducto = (id) =>{
        const productoEliminado = carrito.find( prod => prod.item.id === id);
        const carritoActualizado = carrito.filter( prod => prod.item.id !== id);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
        setcantidadTotal(prev => prev - productoEliminado.cantidad);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setcantidadTotal(0);
    }    
    
    return(
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    ) 
}