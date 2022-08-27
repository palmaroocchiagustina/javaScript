//DESAFIO-1
//CONDICIONALES
/*
let nombre = prompt("Ingrese su nombre");
let usuario = nombre == "Agustina";

if (usuario || nombre == "Agustina") {

    console.log("Hola" + " " + nombre + " " + "sos el usuario que esperabamos");
    
} else {

console.log("Hola " + nombre );

}


//FOR


let palabraSecreta= "palta";


for (let index = 0; index < 3 ; index++) {
    
    let ingresaPalabra = prompt("Ingresa la palabra secreta")
    if (ingresaPalabra == palabraSecreta) {
        console.log("Adivinaste");
        break;
    }else {

         console.log("Seguí intentando");

    }

}

//WHILE

let acierto = false;
let respuestaCorrecta = "banana";
let contador = 0;

while (contador < 2 && acierto === false) {

    let palabraIngresada = prompt ("Que comen los monos?");
    if (palabraIngresada == respuestaCorrecta) {
         
        acierto = true;
        alert("ADIVINASTE");
        
    }else{

        console.log("Segui intentando");
    }
    contador ++;
}
*/

// DESAFIO-2

//FUNCIONES

//bienvenida funcion nombre de usuario
//menu
//eleccion
//suma
//respuesta con el total

//bienvenida
function nombreUsuario() {
    alert("Bienvenidos a CHILL OUT");
    let nombreIngresado = prompt("Ingresa tu nombre");
  
      alert("Hola " + nombreIngresado + " estos son nuestros pruductos");
    
}


function seleccionProducto() {

    let suma=0;
//menú
    let opcion =  prompt("Ingresa el número de la opción que quieras: \n 1-Jeans  \n 2-Remera \n 3-Campera  \n 4-Zapatillas \n 5-Salir");
    
//eleccion
//suma
   do {

    switch (opcion) {
        case "1":
             alert("Elegiste Jeans");
             suma= suma + 500;
             break;
        case "2":
            alert( "Elegiste Remera");
            suma= suma +200;
            break;
        case "3":
            alert("Elegiste Campera");
            suma= suma +1000;
            break;
        case "4":
            alert("Elegiste Zapatillas");
            suma= suma +2000;
            break;

        case "5":
            alert("Salir")
            break;
    default: 
            alert("Ingresa una opción válida");
            break;
       }

    opcion = prompt("Elije el producto que quieres: \n 1-Jeans  \n 2-Remera \n 3-Campera  \n 4-Zapatillas \n 5-Salir");
       

   } while (opcion != "5" & opcion != 5);
//respuesta con el total
   alert("El total de tu compra es de " + suma);
  
   
}

nombreUsuario();
seleccionProducto();







    













