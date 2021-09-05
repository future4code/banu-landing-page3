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



function Cadastrar() {
  let email = document.getElementById("emailId").value;
  let nome = document.getElementById("nameId").value;
  let telefone = document.getElementById("telephoneId").value;
  localStorage.setItem(`email`, email);
  localStorage.setItem(`nome`, nome);
  localStorage.setItem(`telefone`, telefone);

  const seedPassword = new Uint8Array(2);
  let generatePass = window.crypto
    .getRandomValues(seedPassword)
    .join("")
    .toString();

  localStorage.setItem(`pass`, generatePass);
  alert(`Sua senha é ${generatePass}. Guarde-a com segurança`);
  window.location.href = "login.html";
}

/* 
login
chave: exemplo@email.comId  valor: exemplo@email.com
senha: emailPass            valor: generatePass

*/
