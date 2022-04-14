//Helpers
//Creamos la función que se encargara de generar nuestro promedio cuando la lista de personas es par 
function calcularMedia (a,b){
    const suma = a+b;
    return suma/2;
};

function esPar (numerito){
    return (numerito%2 === 0);
};
//Calculamos la mediana General

//Llamamos nuestro variable de personas, usamos el metodo map para filtrar y crear un nuevo Array que contenga el salario de cada uno de ellos
const salariosCol = colombia.map(
    personita => {
        return personita.salary
    }
);
//Una vez hecho esto, ordenaremos de menor a mayor, para que de está forma podamos sacar la mediana con facilidad
//Usamos una Arrow Function de una operación en una linea para agilizar el proceso y ahorrar el consumo de recursos
const salariosColSorted = salariosCol.sort((a,b)=>{return a-b;});

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)) {
        //Buscamos los elementos que esten en la mitad paa promediarlos
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        //Hacemos uso de la función calcularMedia para hallar nuestra mediana
        const mediana = calcularMedia(personitaMitad1, personitaMitad2);
        return mediana;
    }else{
        //Hallamos la mitad de nuestra lista para saber nuestro mediana
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana top 10% 
//Uso del metodo Splice, el cuál nos permite cortar la parte deseada de nuestro Array para utilizarla posteriormente
const spliceStar = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length -spliceStar;
const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount);

//Traemos el resultado de nuestro metodo
const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

