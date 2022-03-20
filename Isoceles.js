console.log("Hello world!");
function calcularIsoceles (Lado1,Lado2,Base){
    Number(Lado1)
    Number(Lado2)
    Number(Base) 
    if (Lado1 == Lado2 & Base == Lado2 & Lado1 == Base) {
        console.log("Este Triángulo NO es Isoceles");

    } else if(Lado1 == Lado2 | Base == Lado2 | Lado1 == Base){
        console.log("Este Triángulo es Isoceles");
        alert("Este Triángulo es Isoceles")
        const altura = Math.sqrt(Lado1**2 - Base**2/ 4)
        alert(altura)
    } else{
        console.log("Este Triángulo NO es Isoceles");

    }
};
