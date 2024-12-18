// seleção de elementos para alternância de navegação
const navToggle = document.querySelector(".nav-toggle"); // botão de alternância
const links = document.querySelector(".links"); // contêiner dos links de navegação

// alterna a exibição dos links ao clicar no botão
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links"); // adiciona ou remove a classe "show-links"
});