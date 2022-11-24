function calcularDistancia(x, y) {
    return Math.sqrt(((Math.pow(Math.pow(x, 2) - Math.pow(x, 1), 2)) + (Math.pow(Math.pow(y, 2) - Math.pow(y, 1)), 2)));
}

console.log(calcularDistancia(5, 6))

const direccionCalculoDistancia = (x, y) => Math.sqrt(((Math.pow(Math.pow(x, 2) - Math.pow(x, 1), 2)) + (Math.pow(Math.pow(y, 2) - Math.pow(y, 1)), 2)));

console.log(direccionCalculoDistancia(5, 6))