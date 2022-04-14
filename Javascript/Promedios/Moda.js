function calculaModa (){
    console.time();
    let input = document.getElementById("input-Moda");
    let value = input.value;
    lista = value.split(",");

    const listaCount ={};

    lista.map(elemento=>{if(listaCount[elemento]){listaCount[elemento]+=1;}else{listaCount[elemento] = 1;}});

    const listaArray = Object.entries(listaCount).sort((a,b)=>{return a[1]-b[1]});

    let moda = listaArray[listaArray.length-1];
    Respuesta.innerHTML = `El número que más se vio fue ${moda} se repitio`;
    console.timeEnd();
}