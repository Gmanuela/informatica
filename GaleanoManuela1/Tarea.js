button = document.querySelector("#boton"); 
button2 = document.querySelector("#boton2"); 
button3 = document.querySelector("#boton3"); 

p = document.querySelector ("p"); 

function cambiocolor()
{
    p.style.backgroundColor = "green"; 
}
boton.onclick = cambiocolor; 

function ocultarp () 
{
    p.style.display = "none"; 
    
}
boton2.onclick = ocultarp; 

function verp()
    {
        p.style.display = "block"; 
        p.style.vidibility = "visible"; 
    }

boton3.onclick = verp; 

document.getElementById("img").onmouseover = padding; 
function padding ()
{
    document.getElementById ("img").style.padding = "10px"; 
}

    document.getElementById ("img").onmouseOut = noPadd
    function noPadd ()
{

}
