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
    var header = document.createElement("header");

    var nav = document.createElement("nav");

    var divCenter = document.createElement("div");
    divCenter.classList.add("nav-center");

    var divHeader = document.createElement("div");
    divHeader.classList.add("nav-header");

    var iconImg = document.createElement("img");
    iconImg.setAttribute("src", "assets/imgs/navicon.png");
    iconImg.setAttribute("alt", "logo");
    iconImg.setAttribute("width", "35px");
    iconImg.setAttribute("height", "40px");
    iconImg.classList.add("logo");

    var btnToggle = document.createElement("button");
    btnToggle.classList.add("nav-toggle");

    var i = document.createElement("i");
    i.className = "fas fa-bars";

    var ul = document.createElement("ul");
    ul.classList.add("links");

    var liHome = document.createElement("li");

    var home = document.createElement("a");
    home.setAttribute("href", "./index.html");
    home.textContent = "Home";

    var liSearch = document.createElement("li");

    var search = document.createElement("a");
    search.setAttribute("href", "./search.html");
    search.textContent = "Search";

    var liAboutus = document.createElement("li");

    var aboutUs = document.createElement("a");
    aboutUs.setAttribute("href", "#aboutus");
    aboutUs.textContent = "About Us";

    divHeader.appendChild(iconImg);
    divHeader.appendChild(btnToggle);
    btnToggle.appendChild(i);
    divCenter.appendChild(divHeader);
    divCenter.appendChild(ul);
    ul.appendChild(liHome);
    ul.appendChild(liSearch);
    ul.appendChild(liAboutus);
    liHome.appendChild(home);
    liSearch.appendChild(search);
    liAboutus.appendChild(aboutUs);
    nav.appendChild(divCenter);
    header.appendChild(nav);

    h.innerHTML = "";
    h.appendChild(header);
  }
}
