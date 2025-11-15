
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