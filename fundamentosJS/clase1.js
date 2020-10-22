//variables

let x = 3; 
let y = 4; 

console.log (`x + y = ${x+y}`); 

// condicionales 

let w = perseFloat (prompt("Ingrese un numero:"));  //creo la ventana para que escriba 
//lo recibe el perse que lo interpreta como un numero, convierte la cadena de carcateres
//en un numero decima. si dice NAN significa not a number 
//console.log (w); 
while(Number.isNaN (w)); 
if (w > 0){
    console.log(`${w} es positivo`)
}else {
    if (w < 0) console,log (`${w} es negativo`); 
    else console.log (`${w} es cero`); 
}



//title Javascript
// h1
//script src nombre documento java script 
//body 