console.log("Hello world!");
function validarIsoceles (Lado1,Lado2,Base){
    let NoIsoceles = "Este Triángulo NO es Isoceles";
    if (Lado1 == Lado2 & Base == Lado2 & Lado1 == Base) {
        console.log("Este Triángulo NO es Isoceles");
        return NoIsoceles
    } else if(Lado1 == Lado2 | Base == Lado2 | Lado1 == Base){
        console.log("Este Triángulo es Isoceles");
        const altura = Math.sqrt(Lado1**2 - Base**2/ 4)
        return altura
    } else{
        console.log("Este Triángulo NO es Isoceles");
        return NoIsoceles
    }
};

function calcularIsoceles (){
        //Se llaman los valores
        const Input1 = document.getElementById("InputTriangle_lado1");
        const Input2 = document.getElementById("InputTriangle_lado2");
        const Input3 = document.getElementById("InputTriangle_Base");
        //Asignación de valores númericos
        let Valor1 = Number (InputTriangle_lado1.value);
        let Valor2 = Number(InputTriangle_lado2.value);
        let Valor3 = Number(InputTriangle_Base.value);
        //Uso de la función
        let respuestaIsoceles = validarIsoceles(Valor1,Valor2,Valor3);
        Respuesta_Isoceles.innerHTML = respuestaIsoceles;
};