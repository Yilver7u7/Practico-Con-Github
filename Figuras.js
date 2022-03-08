//Lo primero que haremos sera definir las formulas
//Segundo paso: Implementar las formulas en Js
//Crear las fucciones que hagan las operaciones deseadas
//Integrar Js con el HTML (Acá empieza lo chido mi rey)
console.log("Hello world!");
//A partir de ahora haremos que funcione la operacion
console.group("Cuadrado");
//Este es el código del cuadrado
function perimetroCuadrado(lado){
    return lado*4
};
function areaCuadrado(lado){
    return lado*lado
};
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado()}cm`);
console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);

console.groupEnd("Cuadrado"); 

console.group("Triángulos");
//Este es el código del Triangulo
function perimetroTriangulo(lado1,lado2,base){
    return `El perimetro del triángulo es: ${lado1+lado2+base}cm`
};


function areaTriangulo(base,altura){
    return `El área del triángulo es: ${(base*altura)/2}cm²`
};

console.groupEnd("Triángulos");

console.group("Circulo");
//Este es el código del Circulo
const radioCirculo =4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo*PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log(`El radio del círculo es: ${radioCirculo}cm`);
console.log(`El diametro del círculo es: ${diametroCirculo}cm`);
console.log(`PI es igual a:${PI}`);
console.log(`El perimetro del círculo es: ${perimetroCirculo}cm`);
console.log(`El área del círculo es: ${areaCirculo}cm²`);

console.groupEnd("Circulo");