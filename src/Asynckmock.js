import './asynckmock.css'


const misProductosBebe = [
{id: "1", nombre:"Conejo Mico", precio: "4990", img:"./img/perro.png", idCat:"2"},
{id: "2", nombre:"Sonajero Alea", precio: "3190", img: "./img/sonajero.png", idCat:"3"},
{id: "3", nombre:"Tigre Rafaello", precio: "4990", img:"./img/conejo.png", idCat: "3"},
{id: "4", nombre:"Portachupete Lía", precio: "3090", img:"./img/portachu.png", idCat: "5"},
{id: "5", nombre:"Jirafa Ana", precio: "4590", img: "./img/jirafa.png", idCat:"2"},
{id: "6", nombre:"Manta Milton", precio: "5600", img:"./img/manta.png", idCat:"2"},
]

export const getProductos = () =>{
    return new Promise ((res)=>{
        setTimeout(() => {
            res(misProductosBebe);
        }, 2000)
    })
}

export const getUnProducto =(id) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            const producto = misProductosBebe.find(prod=> prod.id ===id);
            resolve(producto);
        },2000)
    })
}

export const getUnaCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosporCategoria = misProductosBebe.filter(prod => prod.idCat === idCategoria);
            resolve(productosporCategoria);
        }, 2000)
    })
}