

function calcularImc() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultado = (peso / (altura * altura))

    document.getElementById('resultado').innerHTML = `O resultado é: <strong>${resultado.toFixed(1)}</strong>`;
    

    
    let classificacao = "";

    if (resultado < 18.5) {
        classificacao = "Magreza";
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        classificacao = "Peso Normal";
    } else if (resultado >= 25 && resultado <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (resultado >= 30 && resultado <= 34.9) {
        classificacao = "Obesidade grau I";
    } else if (resultado >= 35 && resultado <= 40) {
        classificacao = "Obesidade grau II";
    } else if (resultado > 40) {
        classificacao = "Obesidade grau III";
    }

    document.getElementById('classificacao').innerHTML = `Classificação: ${classificacao}`;
}
