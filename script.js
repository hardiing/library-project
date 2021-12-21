let myLibrary = [];
const bookName = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const pageCount = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const newBtn = document.querySelector(".addBook");

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.card = function() {
        return name + " by " + author + ", " + pages + ", " + read;
    }
}

let starsight = new Book("Starsight", "Sanderson", 457, "yes");
myLibrary.push(starsight);
let skyward = new Book("Skyward", "Sanderson", 503, "yes");
myLibrary.push(skyward);
let cytonic = new Book("Cytonic", "Sanderson", 500, "no");
myLibrary.push(cytonic);

/* function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        let bookInfo = myLibrary[i].card();
        newDiv.textContent = bookInfo;
        const currentDiv = document.getElementById("main");
        document.body.appendChild(newDiv);
    }
} */

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const tableDiv = document.getElementById("table");
        let bookInfo = myLibrary[i].card();
        //newDiv.textContent = bookInfo;
        const currentDiv = document.getElementById("main");
        //document.body.appendChild(newDiv);
    }
}

function clearForm() {
    let name = document.querySelector("#title")
    name.value = "";
    let author = document.querySelector("#author");
    author.value = "";
    let pages = document.querySelector("#pages");
    pages.value = "";
    let status = document.getElementsByName("status");
    for (let i = 0; i < status.length; i++) {
        status[i].checked = false;
    }
}

displayBooks();

newBtn.addEventListener("click", (e) => {
    let name = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementsByName("status").value;

    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    const newDiv = document.createElement("div");
    let bookInfo = newBook.card();
    newDiv.textContent = bookInfo;
    const currentDiv = document.getElementById("main");
    document.body.appendChild(newDiv);
    e.preventDefault();
    clearForm();
});


