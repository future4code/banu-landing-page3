var logado = localStorage.getItem("logado")
if (logado){
    document.getElementById("button-header").style.display = 'none'
}
else{
    document.getElementById("button-header-logout").style.display = 'none'

}
function Logout(){
    localStorage.removeItem("logado", false)
    document.getElementById("button-header").style.removeProperty('display')
    document.getElementById("button-header-logout").style.display = 'none'
    alert("Volte sempre!")

}


function Logar() {
  let email = document.getElementById("loginEmail").value;
  let senha = document.getElementById("senha").value;

  let emailCadastrado = localStorage.getItem(`ID${email}`);
  let senhaCadastrada = localStorage.getItem(`PASS${email}`);

  if ((email == emailCadastrado) & (senha == senhaCadastrada)) {
    // document.getElementById("botao-login-header").style.display = "none";
    window.location.href='/index.html'
    localStorage.setItem('logado', true)
  } else {

    alert("Email ou senha errados, tente novamente");
  }
}
