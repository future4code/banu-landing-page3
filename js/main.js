var logado = localStorage.getItem("logado")
if (logado){
    document.getElementById("button-header").style.display = 'none'
}

function Logout(){
    localStorage.removeItem("logado", false)
    document.getElementById("button-header").style.removeProperty('display')
    document.getElementById("button-header-logout").style.display = 'none'
    alert("Volte sempre!")

}