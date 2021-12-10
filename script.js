let myLibrary = [];
const displayLibrary = document.querySelector(".library");
const newBtn = document.querySelector(".newBook");

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.card = function() {
        return name + " by " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary() {
    let name = prompt("Enter book name");
    let author = prompt("Enter author");
    let pages = prompt("Enter number of pages");
    let read = prompt("Have you read this book?");

    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
}

function addBook(name, author, pages, read) {
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
}

let starsight = new Book("Starsight", "Sanderson", 457, "yes");
myLibrary.push(starsight);
let skyward = new Book("Skyward", "Sanderson", 503, "yes");
myLibrary.push(skyward);
let cytonic = new Book("Cytonic", "Sanderson", 500, "no");
myLibrary.push(cytonic);
console.log(myLibrary);
displayBooks();

function displayBooks() {
    for (let i = 0; i <= myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        let bookInfo = myLibrary[i].card();
        newDiv.textContent = bookInfo;
        const currentDiv = document.getElementById("main");
        document.body.appendChild(newDiv);
    }
}

//addBookToLibrary();
//console.log(myLibrary);

