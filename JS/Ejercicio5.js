const salarioMensual = 3500000

function calculoSalario(licencia) {
    return salarioMensual+(licencia*1500000)-(salarioMensual+(licencia*1500000)*0.05)
}

console.log("El salario es: "+ calculoSalario(2))

let rowCalcularSalario = (licencia) => salarioMensual+(licencia*1500000)-(salarioMensual+(licencia*1500000)*0.05)