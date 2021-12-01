
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

//Triagulo isósceles.//

function alturaTrianguloIsosceles(trianguloGrandeLado1, trianguloGrandeLado2, trianguloGrandeLadoBase) {
    if (trianguloGrandeLado1 != trianguloGrandeLado2) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLado2 = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLado1;

        const trianguloPequenoLado2Cuadrado = trianguloPequenoLado2 * trianguloPequenoLado2;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase; 

        const trianguloPequenoLado1 = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLado2Cuadrado)

        const triaguloGrandeAltura = trianguloPequenoLado1;
        return triaguloGrandeAltura
    }
}


// Aquí interactuamos con el HTML//
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value

    const area = perimetroCuadrado(value);
    alert(area);
}