// evento disparado quando o conteúdo da página é carregado
document.addEventListener("DOMContentLoaded", function () {
  const alert = document.querySelector(".alert"); // elemento de alerta para mensagens
  const form = document.querySelector(".book-form"); // formulário de livros
  const searchForm = document.getElementById("search-form"); // formulário de pesquisa
  const searchQuery = document.getElementById("search-query"); // campo de pesquisa por título ou autor
  const searchGenre = document.getElementById("search-genre"); // campo de pesquisa por gênero
  const bookList = document.getElementById("book-list"); // contêiner onde os livros são listados
  const clearBtn = document.querySelector(".clear-btn"); // botão para limpar a pesquisa
  const editForm = document.getElementById("edit-form"); // formulário de edição de livro
  // seleção do modal de edição
  const modal = document.getElementById("edit-modal"); // modal de edição
  const closeModalBtn = document.querySelector(".close-btn"); // botão para fechar a modal
  const saveEditBtn = document.querySelector(".save-edit-btn"); // botão de salvar edição
  let currentBookIndex = null; // índice do livro sendo editado

  // funções

  // função para recuperar os livros do localStorage
  function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || []; // retorna os livros ou um array vazio
  }

  // função para exibir a lista de livros
  function displayBooks(filteredBooks = null) {
    const books = filteredBooks || getBooks(); // se não houver filtro, exibe todos os livros
    bookList.innerHTML = ""; // limpa a lista de livros

    if (books.length === 0) {
      bookList.innerHTML = `<p class="empty-message">Nenhum livro na lista</p>`; // mensagem caso não haja livros
      return;
    }

    books.forEach((book, index) => {
      // cria um item de livro
      const bookItem = document.createElement("li");
      bookItem.classList.add("book-item");
      bookItem.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Autor:</strong> ${book.author}</p>
          <p><strong>Ano de Publicação:</strong> ${book.year}</p>
          <p><strong>Páginas:</strong> ${book.pages}</p>
          <p><strong>Gênero:</strong> ${book.genre}</p>
          <p><strong>Descrição:</strong> ${book.description}</p>
          <button class="edit-btn" data-index="${index}">Editar</button>
          <button class="delete-btn" data-index="${index}">Deletar</button>
        `;

      const editBtn = bookItem.querySelector(".edit-btn"); // botão de editar
      const deleteBtn = bookItem.querySelector(".delete-btn"); // botão de deletar

      // evento de clique para abrir a modal de edição
      editBtn.addEventListener("click", function () {
        modal.classList.remove("invisible");
        const bookToEdit = books[index];
        openModal(bookToEdit, index); // abre a modal e preenche com os dados do livro
      });

      // evento de clique para excluir o livro
      deleteBtn.addEventListener("click", function () {
        const confirmed = confirm(
          "Você tem certeza que deseja excluir este livro?" // confirma a exclusão
        );
        if (confirmed) {
          books.splice(index, 1); // remove o livro do array

          if (books.length === 0) {
            localStorage.removeItem("books"); // remove do localStorage se não houver mais livros
          } else {
            localStorage.setItem("books", JSON.stringify(books)); // atualiza o localStorage
          }

          displayBooks(); // atualiza a lista de livros
          displayAlert("Livro deletado com sucesso", "success"); // exibe mensagem de sucesso
        }
      });

      bookList.appendChild(bookItem); // adiciona o item de livro à lista
    });
  }

  // função para abrir a modal e preencher os campos de edição
  function openModal(bookToEdit, index) {
    // preenche o formulário da modal com os dados do livro
    document.getElementById("edit-title").value = bookToEdit.title;
    document.getElementById("edit-author").value = bookToEdit.author;
    document.getElementById("edit-year").value = bookToEdit.year;
    document.getElementById("edit-pages").value = bookToEdit.pages;
    document.getElementById("edit-genre").value = bookToEdit.genre;
    document.getElementById("edit-description").value = bookToEdit.description;

    currentBookIndex = index; // salva o índice do livro sendo editado

    // exibe a modal
    modal.style.display = "flex";
  }

  // evento para salvar as edições do livro
  saveEditBtn.addEventListener("click", function () {
    const books = getBooks(); // recupera os livros do localStorage
    if (currentBookIndex !== null) {
      // atualiza os dados do livro
      books[currentBookIndex] = {
        title: document.getElementById("edit-title").value,
        author: document.getElementById("edit-author").value,
        year: document.getElementById("edit-year").value,
        pages: document.getElementById("edit-pages").value,
        genre: document.getElementById("edit-genre").value,
        description: document.getElementById("edit-description").value,
      };
      // salva os livros atualizados no localStorage
      localStorage.setItem("books", JSON.stringify(books));
      displayBooks(); // atualiza a lista de livros
      displayAlert("Livro atualizado com sucesso", "success"); // exibe mensagem de sucesso

      modal.style.display = "none"; // fecha a modal
      currentBookIndex = null; // limpa o índice do livro
    }
  });

  // função para fechar a modal
  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("invisible"); // oculta a modal
  });

  // filtra livros com base no formulário de busca
  searchForm.addEventListener("submit", searchBooks);

  // função para buscar livros
  function searchBooks(e) {
    e.preventDefault(); // impede o envio do formulário
    const query = searchQuery.value.toLowerCase(); // obtém a consulta de pesquisa
    const genre = searchGenre.value; // obtém o gênero selecionado
    const books = getBooks(); // recupera os livros

    // filtra os livros conforme a consulta e o gênero
    const filteredBooks = books.filter((book) => {
      const matchesQuery =
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);
      const matchesGenre = genre ? book.genre === genre : true;
      return matchesQuery && matchesGenre;
    });

    displayBooks(filteredBooks); // exibe os livros filtrados
  }

  // limpa a lista de livros filtrados
  clearBtn.addEventListener("click", function () {
    const query = searchQuery.value.toLowerCase(); // obtém a consulta de pesquisa
    const genre = searchGenre.value; // obtém o gênero selecionado

    let books = getBooks(); // recupera os livros

    if (books.length === 0) {
      displayAlert("A lista de livros já está vazia.", "danger"); // exibe alerta se a lista estiver vazia
      return;
    }

    // filtra os livros que não correspondem à pesquisa
    const remainingBooks = books.filter((book) => {
      const matchesQuery =
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);
      const matchesGenre = genre ? book.genre === genre : true;
      return !(matchesQuery && matchesGenre);
    });

    if (remainingBooks.length === books.length) {
      displayAlert(
        "Nenhum livro corresponde aos critérios de busca.",
        "danger"
      ); // exibe alerta se nenhum livro corresponder
      return;
    }

    if (remainingBooks.length === 0) {
      localStorage.removeItem("books"); // remove todos os livros do localStorage
    } else {
      localStorage.setItem("books", JSON.stringify(remainingBooks)); // atualiza o localStorage
    }

    bookList.innerHTML = ""; // limpa a lista de livros
    searchForm.reset(); // reseta o formulário de pesquisa

    displayAlert("Livros removidos com sucesso", "success"); // exibe alerta de sucesso

    if (remainingBooks.length === 0) {
      bookList.innerHTML = `<p class="empty-message">Nenhum livro na lista</p>`; // mensagem caso não haja livros restantes
    }
  });

  // exibe a lista de livros ao carregar a página
  displayBooks();
});
