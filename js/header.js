// função para carregar o conteúdo do cabeçalho da página
componentVerify();

function componentVerify() {
  var headers = document.getElementsByClassName("header");

  if (headers) {
    loadHeader(headers);
  }
}

function loadHeader(headers) {
  for (const h of headers) {
    // mapeando os elementos
    var header = document.createElement("header");

    var nav = document.createElement("nav");

    var divCenter = document.createElement("div");
    divCenter.classList.add("nav-center");

    var divHeader = document.createElement("div");
    divHeader.classList.add("nav-header");

    var iconImg = document.createElement("img");
    iconImg.setAttribute("src", "/assets/imgs/navicon.png");
    iconImg.setAttribute("alt", "Logo");
    iconImg.setAttribute("width", "35px");
    iconImg.setAttribute("height", "40px");
    iconImg.classList.add("logo");

    var btnToggle = document.createElement("button");
    btnToggle.classList.add("nav-toggle");

    var iBars = document.createElement("i");
    iBars.className = "fas fa-bars";

    var imgBars = document.createElement("img");
    imgBars.setAttribute("src", "/assets/icons/bars-solid.svg");
    imgBars.style.width = "24px"
    imgBars.style.width = "24px"

    var ul = document.createElement("ul");
    ul.classList.add("links");

    var liHome = document.createElement("li");

    var home = document.createElement("a");
    home.setAttribute("href", "./index.html");
    home.textContent = "Home";

    var liSearch = document.createElement("li");

    var search = document.createElement("a");
    search.setAttribute("href", "./search.html");
    search.textContent = "Pesquisar";

    var liAddBook = document.createElement("li");

    var addBook = document.createElement("a");
    addBook.setAttribute("href", "./addBook.html");
    addBook.textContent = "Adicionar livro";

    // montando a estrutura final do header
    divHeader.appendChild(iconImg);
    divHeader.appendChild(btnToggle);
    btnToggle.appendChild(iBars);
    iBars.appendChild(imgBars);
    divCenter.appendChild(divHeader);
    divCenter.appendChild(ul);
    ul.appendChild(liHome);
    ul.appendChild(liAddBook);
    ul.appendChild(liSearch);
    liHome.appendChild(home);
    liAddBook.appendChild(addBook);
    liSearch.appendChild(search);
    nav.appendChild(divCenter);
    header.appendChild(nav);

    // limpando o conteúdo atual e adicionando o novo header
    h.innerHTML = "";
    h.appendChild(header);
  }
}
