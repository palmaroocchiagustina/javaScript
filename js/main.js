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







    













