let ventas = parseFloat(prompt('Cuantas cosas has comprado?'));
let valor= [];
let valorFinal = ''
for (let i = ventas; i > 0; i--) {
    valorObjeto = parseFloat(prompt(`Cuanto costaba el elemento ${i}`));
    valorFinal = valor.push(valorObjeto);
}

alert(valor.reduce((a, b) => a + b));

