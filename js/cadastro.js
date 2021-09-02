function Cadastrar() {
  let email = document.getElementById("emailId").value;
  let nome = document.getElementById("nameId").value;
  let telefone = document.getElementById("telephoneId").value;
  localStorage.setItem(`ID${email}`, email);
  localStorage.setItem(`ID${nome}`, nome);
  localStorage.setItem(`ID${telefone}`, telefone);

  const seedPassword = new Uint8Array(3);
  let generatePass = window.crypto
    .getRandomValues(seedPassword)
    .join("")
    .toString();
  localStorage.setItem(`PASS${email}`, generatePass);
  alert(`Sua senha é ${generatePass}. Guarde-a com segurança`);
  window.location.href = "/index.html";
}

/* 
login
chave: exemplo@email.comId  valor: exemplo@email.com
senha: emailPass            valor: generatePass


*/
