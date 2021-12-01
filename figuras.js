
// Código del Cuadrado//

console.group("Cuadrados");// me juntan mis console en un grupo se inicia y se termina con un end//

function perimetroCuadrado(lado) {
    return  lado * 4; 
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

console.group("Tríangulo");

function perimetroTriagulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} ;

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();


// Código del circulo//

console.group("Círculos");

function diametroCiruculo (radio) {
    return radio * 2
} 

const PI = Math.PI;
console.log(`PI es: ${PI}`)

function perimetroCirculo(radio) {
    const diametro = diametroCiruculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();