let peso;
let altura;
let imc;
let resultado;

function calcular(event){
  event.preventDefault()
  
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  imc = peso / (altura * altura)
  resultado = document.getElementById('resultado')

  if(imc < 17){
    resultado.innerHTML = 'Seu resultado foi ' + imc.toFixed(2) + ', voce esta muito abaixo do peso!'
  }
  else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = 'Seu resultado foi ' + imc.toFixed(2) + ', abaixo do peso!'
  }
  else if(imc >= 18.5 && imc <= 24.99){
    resultado.innerHTML = 'Seu resultado foi ' + imc.toFixed(2) + ', peso normal!'
  }
  else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = 'Seu resultado foi ' + imc.toFixed(2) + ', acima do peso!'
  }
  else if(imc >= 30){
    resultado.innerHTML = 'Seu resultado foi ' + imc.toFixed(2) + ', obesidade!'
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}