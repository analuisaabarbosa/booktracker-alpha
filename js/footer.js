// carregar o conteúdo do footer da página
componentVerify();

function componentVerify() {
  var footers = document.getElementsByClassName("footer");

  if (footers.length > 0) {
    loadFooter(footers);
  }
}

function loadFooter(footers) {
  for (const f of footers) {
    // mapeando os elementos
    var footer = document.createElement("footer");

    var divContainer = document.createElement("div");
    divContainer.classList.add("container");

    var divLinks = document.createElement("div");
    divLinks.className = "text-center-links";

    var h5Links = document.createElement("h5");
    h5Links.textContent = "Nossas redes :";

    var divSocialMedia = document.createElement("div");
    divSocialMedia.classList.add("social-media");

    // instagram
    var instagram = document.createElement("a");
    instagram.className = "btn btn-outline-light btn-floating m-1";
    instagram.setAttribute("href", "https://www.instagram.com/accounts/login/");
    instagram.setAttribute("role", "button");

    var iInstagram = document.createElement("img");
    iInstagram.setAttribute("src", "/assets/icons/instagram-brands-solid.svg");
    iInstagram.setAttribute("alt", "Instagram");
    iInstagram.style.width = "24px";
    iInstagram.style.height = "24px";

    // facebook
    var facebook = document.createElement("a");
    facebook.className = "btn btn-outline-light btn-floating m-1";
    facebook.setAttribute("href", "https://www.facebook.com/?locale2=pt_BR&_rdr");
    facebook.setAttribute("role", "button");

    var iFacebook = document.createElement("img");
    iFacebook.setAttribute("src", "/assets/icons/facebook-f-brands-solid.svg");
    iFacebook.setAttribute("alt", "Facebook");
    iFacebook.style.width = "24px";
    iFacebook.style.height = "24px";

    // x (twitter)
    var x = document.createElement("a");
    x.className = "btn btn-outline-light btn-floating m-1";
    x.setAttribute("href", "https://x.com/i/flow/login?lang=pt");
    x.setAttribute("role", "button");

    var iX = document.createElement("img");
    iX.setAttribute("src", "/assets/icons/x-twitter-brands-solid.svg");
    iX.setAttribute("alt", "X");
    iX.style.width = "24px";
    iX.style.height = "24px";

    // footer final com copyright
    var divFinal = document.createElement("div");
    divFinal.className = "text-center-copyright";

    var pFinal = document.createElement("p");
    pFinal.classList.add("copy");
    pFinal.textContent = "© 2024 Booktracker.";

    // montando a estrutura final do footer
    divLinks.appendChild(h5Links);
    divLinks.appendChild(divSocialMedia);
    divSocialMedia.appendChild(instagram);
    instagram.appendChild(iInstagram);
    divSocialMedia.appendChild(facebook);
    facebook.appendChild(iFacebook);
    divSocialMedia.appendChild(x);
    x.appendChild(iX);
    divContainer.appendChild(divLinks);
    divContainer.appendChild(divFinal);
    divFinal.appendChild(pFinal);
    footer.appendChild(divContainer);

    // limpando o conteúdo atual e adicionando o novo footer
    f.innerHTML = "";
    f.appendChild(footer);
  }
}

