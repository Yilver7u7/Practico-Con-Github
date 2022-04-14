//Llamamos nuestro variable de personas, usamos el metodo map para filtrar y crear un nuevo Array que contenga el salario de cada uno de ellos
const salariosCol = colombia.map(
    personita => {
        return personita.salary
    }
);
//Una vez hecho esto, ordenaremos de menor a mayor, para que de está forma podamos sacar la mediana con facilidad
//Usamos una Arrow Function de una operación en una linea para agilizar el proceso y ahorrar el consumo de recursos
const salariosColSorted = salariosCol.sort((a,b)=>{return a-b});

