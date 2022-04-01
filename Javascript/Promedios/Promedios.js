console.group("Promedio | Media")
function calcularMedia (lista){
    let sumaLista = 0;
     for (let i= 0; i < lista.length; i++){
         sumaLista = sumaLista + lista[i];
     };
    const promedioLista = sumaLista/lista.length;
     return promedioLista
};
console.groupEnd()


