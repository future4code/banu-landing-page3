let emailCadastrado = localStorage.getItem(`email`);
let nomeCadastrado = localStorage.getItem(`nome`).split(' ');
let telefone = localStorage.getItem(`telefone`)

firstName = nomeCadastrado[0]
lastName = nomeCadastrado.slice(-1)[0]

document.getElementById("h1Nome").innerHTML = `Oi, ${firstName}! nosso feedback:`
document.getElementById("TDnome").innerHTML = firstName +' ' + lastName 
document.getElementById("TDemail").innerHTML = emailCadastrado
document.getElementById("TDTelefone").innerHTML = telefone

function Logout(){
    localStorage.removeItem("logado")
    window.location.href = '/index.html'
    alert("Volte sempre!")
}