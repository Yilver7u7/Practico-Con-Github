 function calcularMediana(){
     let input = document.getElementById("input-Average");
     let value = input.value;
    let list=value.split(",");

    const lista = list.sort(function (a,b) {
        return a-b
    });

    const mitadLista = parseInt(lista.length/2);
    let mediana;

    if (esPar(lista.length)) {
        //Necesitamos 2 elementos que serán las posiciones
        let one = lista[mitadLista-1];
        let dos = lista[mitadLista];
        console.log(mitadLista);
        //Promedio de las posiciones
        let promedioMediana =  calcularMedia(Number (one), Number(dos));
        //Mediana
        console.log(promedioMediana);
        Respuesta.innerHTML = promedioMediana;
    }else{
        mediana = lista[mitadLista];
        console.log(mediana);
        Respuesta.innerHTML = mediana;
    };

    function esPar(numerito){
        if (numerito%2 === 0) {
            return true
        }else{
            return false
        }
    };

    function calcularMedia (a,b){
        let suma = a+b;
        return suma/2;
    };
};