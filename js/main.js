// DESAFIO ARRAYS



const  prenda = {tipo: "remera",color: "fucsia", precio: 2000 };
productos = []; //array vacio donde con push voy a meter los objetos

//clase constructora
class Producto {
    constructor(tipo,color, precio) {
    
        this.tipo = tipo;
        this.color = color;
        this.precio = parseFloat(precio);

       this.sumarRecargo = ()=>{

       return this.precio = this.precio * 1.20 ;

       }

    }
}


// CREO PRODUCTO NUEVO 

const productoNuevo1 = new Producto ("jeans","azul", 4000);
const productoNuevo2 = new Producto ("top","verde", 2500);

productoNuevo1.sumarRecargo();

productoNuevo2.sumarRecargo();

//FC PARA PUSH DE PRODUCTOS

function cargarProductos(producto) {
    
    productos.push(producto);

}


cargarProductos(prenda);
cargarProductos(productoNuevo1);
cargarProductos(productoNuevo2);
console.log(productos);
console.log(productoNuevo1.precio);
console.log(productoNuevo2.precio);
















