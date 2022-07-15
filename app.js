//book list constructer
//-------------------------------------------------------------
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//---------------------------------------------------------------
function UI() {}

UI.prototype.addBookToList = function (newBook) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${newBook.title}</td>
  <td>${newBook.author}</td>
  <td>${newBook.isbn}</td>
  <td>  <a href = "#" class = "delete">x</a></td>`;
  list.appendChild(row);
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");

  div.className = `alert ${className} `;

  const myMessage = document.createTextNode(message);

  div.appendChild(myMessage);

  const col = document.querySelector(".col");

  const form = document.querySelector("#book-form");

  col.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className =  'delete'){
    target.parentElement.parentElement.remove()
  }
}
UI.prototype.clearField = function (newBook) {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const newBook = new Book(title, author, isbn);
  const ui = new UI();
  console.log(newBook);
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill the field's", "error");
  } else {
    ui.addBookToList(newBook);
    ui.showAlert("Your book has been added", "success");
  }
  e.preventDefault();
});

// delete
document.getElementById('book-list').addEventListener('click', function(e){
  
  const ui = new UI();
  ui.deleteBook(e.target)
  ui.showAlert("Your book has been deleted", "success");
  e.preventDefault()
})