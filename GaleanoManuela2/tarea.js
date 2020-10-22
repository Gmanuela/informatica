
let tabla= document.querySelector("#tablaTareas");
let compras= [];
let btn= document.querySelector("#btnAdd")
let input= document.querySelector("#inputAdd")
let input2= document.querySelector("#inputAdd2")
let input3= document.querySelector("#inputAdd3")

function addHeaders()
    {
        let fila= document.createElement("tr");
        let head1= document.createElement("th");
        head1.innerHTML="Materia";
        let head2= document.createElement("th");
        head2.innerHTML="Descripción";
        let head3= document.createElement("th");
        head3.innerHTML="Fecha";
        fila.appendChild(head1);
        fila.appendChild(head2);
        fila.appendChild(head3);
        tabla.appendChild(fila);
    }
function hacerTablas(){
tabla.innerHTML="";
addHeaders();
 for(let i = 0; i < compras.length; i= i + 3)
{
    let h= i + 1;
    let t= i + 2;
    let fila= document.createElement("tr")
    let Materia= document.createElement("td")
    Materia.innerHTML= compras[i];
    let texto= document.createElement("td")
    texto.innerHTML= compras[h];
    let Fecha= document.createElement("td")
    Fecha.innerHTML= compras[t];
    fila.appendChild(Materia)
    fila.appendChild(texto)
    fila.appendChild(Fecha)
    tabla.appendChild(fila);
}
}
function addItem()
{
    let item = input.value;
    compras.push(item);
    let item2 = input2.value;
    compras.push(item2);
    let item3 = input3.value;
    compras.push(item3);
    hacerTablas();
    input.value="";
    input2.value="";
    input3.value="";
}
btn.onclick = addItem;
