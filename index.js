const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
function suma(num1, num2) {return result = num1 + num2};
function potenciacion(a, b) {return result = Math.pow(a, b)}
function separarPalabras(texto) { return texto.split(" ")}
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero %1 === 0){
            return false;
        }
        
    }
    return numero !== 1;
}