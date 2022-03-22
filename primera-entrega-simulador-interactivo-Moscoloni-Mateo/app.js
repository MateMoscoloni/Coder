// La sentencia que elegí fue "Calcular pagos en cuotas sobre un monto determinado"
function calcularMontoCuotas (monto, cuotas, interes) {
    switch (true) {
        case cuotas >= 6 && cuotas <= 9:
          interes = 1.10
          break;
        case cuotas > 9 && cuotas <= 12:
          interes = 1.12
          break;
        case cuotas > 12 && cuotas <= 18:
            interes = 1.15
        break;
    default:
        interes = 0
        break;
    }
    return  (interes * monto) / cuotas
}

let valor1 = Number(prompt("ingrese el monto del producto"))
let valor2 = Number(prompt("ingrese la cantidad de cuotas de 1 a 18. Sin intereses de 1 a 6 cuotas, 10% de interes de 6 a 9 cuotas, 12% de interes de 9 a 12 cuotas, 15% de interes de 12 a 18 cuotas."))

alert(calcularMontoCuotas(valor1, valor2))