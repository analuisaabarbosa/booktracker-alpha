// CRUD - gerenciamento de livros

// adicionando um livro
const form = document.querySelector(".book-form"); // formulário de livros
const alert = document.querySelector(".alert"); // elemento de alerta para mensagens

form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede o envio padrão do formulário

  // obtendo os valores dos campos do formulário
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const description = document.getElementById("description").value;

  // criando um objeto livro com os dados do formulário
  const book = { title, author, pages, genre, year, description };

  // recupera os livros armazenados no localStorage ou um array vazio, caso não existam
  const books = JSON.parse(localStorage.getItem("books")) || [];

  // adiciona o novo livro ao array
  books.push(book);

  // salva o array de livros de volta no localStorage
  localStorage.setItem("books", JSON.stringify(books));

  // reseta os campos do formulário
  form.reset();

  // exibe um alerta de sucesso
  displayAlert("Livro adicionado com sucesso", "success");
});

// função para exibir o alerta ao usuário
function displayAlert(text, action) {
  alert.textContent = text; // define o texto do alerta
  alert.classList.add(`alert-${action}`); // aplica o estilo ao alerta (sucesso ou erro)
  
  // remove o texto e o estilo do alerta após 2 segundos
  setTimeout(function () {
    alert.textContent = ""; // remove o texto
    alert.classList.remove(`alert-${action}`); // remove o estilo
  }, 2000);
}
