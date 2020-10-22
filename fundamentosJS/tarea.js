let name;
do{name= prompt("Inserte su nombre");}
while(name.length<=2)

let age
do{ age= parseFloat(prompt("Inserte su edad"));} 
while(Number.isNaN(age) || age<=0)

if(age <= 12 && age> 0) 
{
    console.log(`Hola ${name}`);
}
else{
    if(age <= 50 && age >=13)
    {
        console.log(`Buenos días ${name}`)
    }
    else{
        console.log(`Buenos días respetado ${name}`)
    }
}
