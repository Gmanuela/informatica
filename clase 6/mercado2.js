let compras = JSON.parse (window.localStorage.setItem ("compras"));
if (compras == null) compras = []; 
let lista = document.querySelector ("#listamercado")

//bucle 


//Option 1, for como en C 

// for (let i = 0; i < compras.length; i ++) 
// {
//     let elemento = document.createElement("li") // list item, create crea el elemento en la pagina 
//     // crear el texto 
//     elemento.innerHTML = compras [i]; // crea un elemento con texto corresopndiente alhtml y lo poone dentro la lista
//     // elemento es li, para escribir dentro se le pone el inner html  
//     lista.appendChild(elemento) // es hijo de la lista, queda dentro otro elemento. 
   
// } comand k y comand c para comentar todo de una sola vez 


//opcion 2, for of 
// se hace lo mismo para cada elemento de la lista 
function hacerLista  () {
    lista.innerHTML= ""; 
     for (item of compras)
{
    let elemento = document.createElement("li"); 
    elemento.innerHTML = item;  
    lista.appendChild(elemento); 
}
}

let input = document.querySelector ("#inputAdd"); 
let btn = document.querySelector ("#btnAdd"); 

// event listener 
function addItem(){
    //leer el valor que se ingresó 
    let item =  input.value; 
    compras.push (item); 
    window.localStorage.setItem ("compras" , JSON.stringify (compras));
    hacerLista (); 
    
    input.value = ""; // borrar lo que el usuario escribió. 
    // text area para agradar el espacio donde se escribe 

}
btn.onclick = addItem; 
hacerLista (); 

