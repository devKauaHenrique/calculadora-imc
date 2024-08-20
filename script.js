function calcular(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome != '' && peso != '' && altura != ''){
        let IMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(IMC < 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if(IMC < 25){
            classificacao = 'com peso ideal, Parabéns!!';
        }
        else if(IMC < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if(IMC < 35){
            classificacao = 'com obesidade grau I';
        }
        else if(IMC < 40){
            classificacao = 'cpm obesidade grau II';
        }
        else{
            classificacao = 'com obesidade Grau III, Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${IMC} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = 'Preencha todos os campos!!';
    }
}