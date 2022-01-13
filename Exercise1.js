
(() =>{
    let num_transacciones = prompt("Indica el numero de transacciones");
    trasanccion(num_transacciones);
})();

function trasanccion(num_transacciones){
    var transacciones = null;
    var total = null; 
    transacciones = num_transacciones*3;
    console.log(transacciones);
    for(let i = 0; i<num_transacciones;i++){
        let pagos = prompt(`Ingresa el monto de la transaccion`);
        total = Number(total)+Number(pagos);
        console.log(total)
    }
    total += transacciones;
    total = total+(total*0.01);
    alert(`El total de a pagar es: ${total} dolares`);
}
