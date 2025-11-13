document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const mensagem = document.getElementById("mensagem").value;
    if (mensagem.trim() === "") {
        alert("Por favor, digite uma mensagem antes de enviar.");
    } else {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form-contato").reset();
    }
});
function askName() {
  var name = prompt('Qual é o seu nome?');
  document.getElementById('greeting').innerHTML = 'Olá, ' + name + '!' + ' seja bem vindo!' + ' Aqui você pode acessar os nossos planos de treinos e dietas, calcular seu IMC e escolher o melhor plano para você!. ' + ' Aproveite!' + ' Qualquer dúvida entre em contato conosco!';
}


function validarLogin(event) {

    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

   
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }


    alert("Login realizado com sucesso!");

    return true;
}


document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();  

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Peso: ${peso} kg<br>Altura: ${altura} m`;
});
