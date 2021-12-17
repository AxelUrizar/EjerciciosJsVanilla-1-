let ventas = parseFloat(prompt('Cuantas cosas has comprado?'));
let valor= [];

for (let i = ventas; i > 0; i--) {
    valorObjeto = parseFloat(prompt(`Cuanto costaba el elemento ${i}`));
    valor.push(valorObjeto);
}


valor.reduce((a, b) => a + b);

console.log(valor)

