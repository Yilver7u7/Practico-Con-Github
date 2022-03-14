//Lo primero que haremos sera definir las formulas
//Segundo paso: Implementar las formulas en Js
//Crear las fucciones que hagan las operaciones deseadas
//Integrar Js con el HTML (Acá empieza lo chido mi rey)
console.log("Hola soy tu calculadora personal y estaré para ayudarte en las operaciones que tenga disponible en el momento, por favor ingresa los valores en cm");
//A partir de ahora haremos que funcione la operacion
console.group("Cuadrado");
//Este es el código del cuadrado
function perimetroCuadrado(lado){
    return lado*4
};
function areaCuadrado(lado){
    return lado*lado
};
console.groupEnd("Cuadrado"); 

console.group("Triángulos");
//Este es el código del Triangulo
function perimetroTriangulo(lado1,lado2,base){
    console.log(`Los lados del triángulo son ${lado1},${lado2},${base}`);
    return lado1+lado2+base
};
function areaTriangulo(base,altura){
    return (base*altura)/2
};
console.groupEnd("Triángulos");

console.group("Circulo");
const PI = Math.PI;
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
    return (radio*radio)*PI
};

console.groupEnd("Circulo");

//Operaciones de los botones (Cuadrado)
//Perimetro Cuadrado
function calcularPerimetroCuadrado(lado){
    //Hacemos el uso del lector documen.get para traernos del HTMl a nuestro formulario y darle ese valor a una variable
    const input = document.getelementById("InputCuadrado");
    //Luego dentro de está buscamos su proiedad o valor y se lo declaramos a una nueva variable que sera usada, para las operaciones.
    const value = input.value;
    //generamos una variableque reutilizado los valores anteriores les da el argumento que el usuario les entrego
    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado(){ 
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area); 
};