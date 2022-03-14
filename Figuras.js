//Lo primero que haremos sera definir las formulas
//Segundo paso: Implementar las formulas en Js
//Crear las fucciones que hagan las operaciones deseadas
//Integrar Js con el HTML (Acá empieza lo chido mi rey)
console.log("Hola soy tu calculadora personal y estaré para ayudarte en las operaciones que tenga disponible en el momento, por favor ingresa los valores en cm");
//A partir de ahora haremos que funcione la operacion
console.group("Cuadrado");
//Este es el código del cuadrado
function perimetroCuadrado(lado){
    console.log(`Los lados del cuadrado son: ${lado}`);
    return `${lado*4}cm`
};
function areaCuadrado(lado){
    return `${lado*lado}cm²`
};
console.groupEnd("Cuadrado"); 

console.group("Triángulos");
//Este es el código del Triangulo
function perimetroTriangulo(lado1,lado2,base){
    console.log(`Los lados del triángulo son ${lado1},${lado2},${base}`);
    return `El perimetro del triángulo es: ${lado1+lado2+base}cm`
};
function areaTriangulo(base,altura){
    return `El área del triángulo es: ${(base*altura)/2}cm²`
};
console.groupEnd("Triángulos");

console.group("Circulo");
let PI = Math.PI;
// const perimetroCirculo = diametroCirculo*PI;
// const areaCirculo = (radioCirculo*radioCirculo)*PI;
function diametroCirculo(radio){
    return radio*2
};
function perimetroCirculo(radio){
    let diametro = diametroCirculo(radio)
    return diametro*PI
};

function areaCirculo(radio){
    return `${(radio*radio)*PI}cm²`
};

console.groupEnd("Circulo");