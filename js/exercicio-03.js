// Faça um Programa que peça dois números e imprima a soma.
function Testar() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = parseFloat(numero1) + parseFloat(numero2);

    document.getElementById("mensagem").innerText = numero1+ " + "+ numero2+ " = "+ resultado;

}