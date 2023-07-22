import './asynckmock.css'


const misProductosBebe = [
{id: "1", nombre:"Conejo Mico", precio: "4990", stock:10, img:"/img/conejo.jpg", idCat:"2"},
{id: "2", nombre:"Sonajero Alea", precio: "3190", stock:10, img: "/img/sonajero.jpg", idCat:"3"},
{id: "3", nombre:"Tigre Rafaello", precio: "4990", stock:10, img:"/img/tigre.jpg", idCat: "2"},
{id: "4", nombre:"Muñeca Lía", precio: "3090", stock:10, img:"/img/muñeca.png.jpg", idCat: "3"},
{id: "5", nombre:"Jirafa Ana", precio: "4590", stock:10, img: "/img/jirafa.png.jpg", idCat:"2"},
{id: "6", nombre:"Manta Milton", precio: "5600", stock:10, img:"/img/manta.jpg", idCat:"3"},
]

export const getProductos = () =>{
    return new Promise ((res)=>{
        setTimeout(() => {
            res(misProductosBebe);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve=>{
        setTimeout(()=>{
            const producto = misProductosBebe.find(prod=> prod.id === id);
            resolve(producto);
        },100)
    })
}

export const getUnaCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosporCategoria = misProductosBebe.filter(prod => prod.idCat === idCategoria);
            resolve(productosporCategoria);
        }, 100)
    })
}