/* Bloqueia o acesso caso não esteja logado */
if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "index.html";
  }

/* Recebe o nome do usuário e diz "olá" + Usuário */
let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let logado = document.querySelector('#logado')
logado.innerHTML = `Olá, ${userLogado.nome}`

/* funcionalidade do logout */
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "home.html";
  }

/*função de funcionalidade da barra de pesquisa */
const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
    content.innerHTML = "";

    items
        .filter((item) =>
        item.toLowerCase().includes(inputSearch.valuer.toLowerCase())
        )
        .forEach((item)=> addHTML(item));
};

function addHTML(item) {
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div); 
}

fetch("home.html")
  .then((data)=> data.json())
  .then((home)=> {
    home.forEach((user)=> {
        addHTML(user.name);
        items.push(user.name);
    });
  });