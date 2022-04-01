const lista = [100,200,500,400000000]

const mitadLista = parseInt(lista.length/2);
let mediana;

if (esPar(lista.length)) {
    //Necesitamos 2 elementos que serán las posiciones
    const Elemento1 = lista[mitadLista-1];
    const Elemento2 = lista[mitadLista];
    //Promedio de las posiciones
    let promedioMediana = calcularMedia([Elemento1, Elemento2])
    //Mediana
    console.log(promedioMediana);
}else{
    mediana = lista[mitadLista];
    console.log(mediana);
};

function esPar(numerito){
    if (numerito%2 === 0) {
        return true
    }else{
        return false
    }
};

function calcularMedia (lista){
    let sumaLista = 0;
     for (let i= 0; i < lista.length; i++){
         sumaLista = sumaLista + lista[i];
     };
    const promedioLista = sumaLista/lista.length;
     return promedioLista
};

