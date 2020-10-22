 
do {
    let name= prompt("Inserte su nombre: ");
}

while(namelength< 3)

let age;
do {
    age = parseFloat(prompt("Inserte su edad:"));
} 
while(Number.isNaN(age) || age<= 0)


if (age < 12) 
{
    console.log(`Hola ${name}`);
}
else{
    if(age < 50)
    {
        console.log(`Buenos días ${name}`)
    }
    else
        console.log(`Buenos días respetado ${name}`)
}



