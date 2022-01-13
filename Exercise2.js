var amx1 = prompt("Ingresa el nombre de tu amigo 1 ");
var amx2 = prompt("Ingresa el nombre de tu amigo 2 ");
var amx3 = prompt("Ingresa el nombre de tu amigo 3 ");
var age1 = prompt("En que año naciste amigo 1 ?");
var age2 = prompt("En que año naciste amigo 2 ?");
var age3 = prompt("En que año naciste amigo 3 ?"); 

function edad (age1, age2, age3, amx1, amx2, amx3){
    console.log(" Bienvenido " + amx1 + " tienes: " + calculaedad (age1) + " años, "+" Bienvenido " + amx2 + " tienes: " + calculaedad (age2) + " años, " +
     " Bienvenido " + amx3 + " tienes: " + calculaedad (age3) + " años.")
}

edad(age1, age2, age3, amx1, amx2, amx3);

function calculaedad (age){
    return 2022 - age;
}
    /* amigos(amx1,amx2,amx3);
    function amigos( amx1, amx2, amx3 ){

        console.log("Bienvenido " + amx1 + " " + amx2 + " " + amx3);
    }

    //Part two

    var year = prompt("Ingresa tu año de nacimiento ");
    var now = 2022;

function birth(num1,num2)
{
    var res = num2-num1;
    alert("Tu edad es: " + res)
}

birth(year,now); */

