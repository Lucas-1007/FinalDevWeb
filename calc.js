
function calcular() {
    // Obter valores de peso e altura
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var idade = document.getElementById('idade').value;
    var fator;
    var resultadoElemento = document.getElementById('recomendacao');

    // Validar entrada
    if (peso === '' || altura === '' || idade === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    var imc = peso / (altura * altura);

    if (imc <= 18.5) {
        fator = 10;
    } else if (imc >= 18.5 && imc <= 24.9) {
        fator = 1;
    } else if (imc >= 25 && imc <= 29.9) {
        fator = 6;
    } else if (imc >= 30 && imc <= 34.9) {
        fator = 10;
    } else if (imc >= 35 && imc <= 39.9) {
        fator = 20;
    } else {
        fator = 30;
    }


    
    var plano1 = 100 + (idade * 10 * (imc / 10));
    var plano2 = (150 + (idade * 15)) * (imc / 10);
    var plano3 = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
    var plano4 = 100 + (fator * 10 * (imc / 10));
    var plano5 = (150 + (fator * 15)) * (imc / 10);
    var plano6 = (200 + (imc * 10) + (fator * 20)) * (imc / 10);


   
    var result = document.getElementById('resultado');
    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
    var result1 = document.getElementById('resultado1');
    resultado1.innerHTML = 'R$' + plano1.toFixed(2);
    var result2 = document.getElementById('resultado2');
    resultado2.innerHTML = 'R$' + plano2.toFixed(2);
    var result3 = document.getElementById('resultado3');
    resultado3.innerHTML = 'R$' + plano3.toFixed(2);
    var result4 = document.getElementById('resultado4');
    resultado4.innerHTML = 'R$' + plano4.toFixed(2);
    var result5 = document.getElementById('resultado5');
    resultado5.innerHTML = 'R$' + plano5.toFixed(2);
    var result6 = document.getElementById('resultado6');
    resultado6.innerHTML = 'R$' + plano6.toFixed(2);

    var menorValor = Math.min(plano1, plano2, plano3, plano4, plano5, plano6);

    if (menorValor === plano1) {
        resultadoElemento.innerHTML = 'Recomendado: Plano A - Básico';
    } else if (menorValor === plano2) {
        resultadoElemento.innerHTML = 'Recomendado: Plano A - Standard';
    } else if (menorValor === plano3) {
        resultadoElemento.innerHTML = 'Recomendado: Plano A - Premium';
    } else if (menorValor === plano4) {
        resultadoElemento.innerHTML = 'Recomendado: Plano B - Básico';
    } else if (menorValor === plano5) {
        resultadoElemento.innerHTML = 'Recomendado: Plano B - Standard';
    } else {
        resultadoElemento.innerHTML = 'Recomendado: Plano B - Premium';
    }

  
    var resultadoMenorValor = document.getElementById('resultadoMenorValor');
    resultadoMenorValor.innerHTML = 'O Menor Valor é: R$' + menorValor.toFixed(2);
    

}