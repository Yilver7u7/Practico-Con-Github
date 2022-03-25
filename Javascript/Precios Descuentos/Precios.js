//Generamos la función que realizará la operación
function Descuento (Precio,Descuento){
    return (Precio*(100-Descuento))/100
};
function calcularDescuento(){
    //Traemos los valores que se insertan en las input
    const Input1 = document.getElementById("input-Precio");
    const Input2 = document.getElementById("input-Descuento");
    //Valores
    let precio = Number (Input1.value);
    let descuento = Number (Input2.value);
    //fuciones
    let resultado = Descuento(precio, descuento);
    let Resultado = `${resultado} $`
    decuentoTotal.innerHTML = Resultado;
};