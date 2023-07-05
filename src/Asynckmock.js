import './asynckmock.css'


const misProductosBebe = [
{id: 1, nombre:"Conejo Mico", precio: 4990, img:"./img/perro.png"},
{id: 2, nombre:"Sonajero Alea", precio: 3190, img: "./img/sonajero.png"},
{id: 3, nombre:"Tigre Rafaello", precio: 4990, img:"./img/conejo.png"},
{id: 4, nombre:"Portachupete Lía", precio: 3090, img:"./img/portachu.png"},
{id: 5, nombre:"Jirafa Ana", precio: 4590, img: "./img/jirafa.png"},
{id: 6, nombre:"Manta Milton", precio: 5600, img:"./img/manta.png"},
]

export const getProductos = () =>{
    return new Promise ((res)=>{
        setTimeout(() => {
            res(misProductosBebe);
        }, 2000);
    })
}

