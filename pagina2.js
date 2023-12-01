let res = document.getElementById('res')

function somar(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultadoSoma = num1 + num2

    res.innerHTML = `A soma de ${num1} + ${num2} é igual a ${resultadoSoma}`
}

function diminuir(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultadoDiminuir = num1 - num2

    res.innerHTML = `A subtração de ${num1} + ${num2} é igual a ${resultadoSoma}`
}

function multiplicar(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultadoMultiplicação = num1 * num2

    res.innerHTML = `A multiplicação de ${num1} + ${num2} é igual a ${resultadoSoma}`
}
function dividir(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultadoDivisao = num1 / num2

    res.innerHTML = `A divisão de ${num1} + ${num2} é igual a ${resultadoSoma}`
}