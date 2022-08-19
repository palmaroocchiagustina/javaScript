
//CONDICIONALES

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









    













