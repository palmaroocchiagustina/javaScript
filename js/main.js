// DOM

const prendas = [

    {nombre : "remera",precio: 2000},
    {nombre : "buzo",precio: 6000},
    {nombre : "jeans",precio: 10000},
    {nombre : "cami saco",precio: 12000},
    {nombre : "zapatillas",precio: 20000},
  
  ]
const h2 = document.getElementById("h2","h3");

const parrafo = document.getElementsByTagName("p");
const parrafoClases = document.getElementsByClassName("parrafo");
const contenedor = document.getElementById("contenedor");
const ul = document.getElementById("lista");

//ITERAR CADA ELEMENTO DE LA LISTA

for (const parrafo of parrafoClases) {

    console.log(parrafo.innerHTML);
    
}

console.log(parrafo[0].innerText = "ROPA DE DISEÑO");

// Bienvenida

h2.innerHTML="<em>Bienevenidos</em>";


// crear desde js

const ingreso = document.createElement("p");

ingreso.innerText= "Aceptamos todos los medios de pago";

contenedor.append(ingreso);

// mostrar prendas 

h3.innerHTML = "<em>Nuestros productos</em>";

for (const prenda of prendas) {

    const li = document.createElement('li')
  
    li.innerHTML=`<div class= "card">
    <h3>${prenda.nombre}</h3>
    <p>${prenda.precio}</p>
    </div>
   `
   ul.append(li)
  
}







 

