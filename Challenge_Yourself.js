
function approve (cali){

    var cali = parseInt (prompt("Ingresa tu calificacion "));
console.log("Status Materia: " + ko(cali)); 

}
approve();

function ko(calificacion){ 
    if (calificacion >=5 ){
        return true;   
    }

    else {
        return false;
    }
}

/*
    if (cali > 5 && cali < 11 ) {
            alert("Tu status es " + true);
        }
         else {
        alert("Tu status es " + false);
            }
        if else
        }
*/

