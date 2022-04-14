function calcularMedia (lista){
    let sumaLista = 0;
    for (let i= 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
     };
    const promedioLista = sumaLista/lista.length;
     return promedioLista
};


function Promedio (){
};
//LLamada de la input y asignación de valores
let promedio = "45,35"
//Uso de la función y operaciones 
promedio = Array.from(promedio);
console.log(promedio);
console.log(typeof(promedio))
let resultado = calcularMedia(promedio);
 Respuesta.innerHTML = resultado;


