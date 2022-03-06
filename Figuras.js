//Lo primero que haremos sera definir las formulas
//Segundo paso: Implementar las formulas en Js
//Crear las fucciones que hagan las operaciones deseadas
//Integrar Js con el HTML (Acá empieza lo chido mi rey)
console.log("Hello world!");
//A partir de ahora haremos que funcione la operacion
console.group("Cuadrado");
//Este es el código del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado*4;
const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);
console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);

console.groupEnd("Cuadrado"); 

console.group("Triángulos");
//Este es el código del Triangulo
const ladoTriangulo1 = 7;
const ladoTriangulo2 = 7;
const baseTriangulo = 7;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);
console.log(`El perimetro del triángulo es: ${perimetroTriangulo}cm`);
console.log(`El área del triángulo es: ${areaTriangulo}cm²`);

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