document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
  }
  const imc = peso / (altura * altura);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <h3>Resultado do IMC:</h3>
      <p>Seu IMC é ${imc.toFixed(2)}.</p>
      <p>${calcularCategoriaIMC(imc)}</p>
  `;
});
function calcularCategoriaIMC(imc) {
  if (imc < 18.5) {
      return 'Abaixo do peso';
  } else if (imc < 24.9) {
      return 'Peso normal';
  } else if (imc < 29.9) {
      return 'Sobrepeso';
  } else {
      return 'Obesidade';
  }
}
