let myLibrary = [];
const DEFAULT_DATA = [
    {
        name: "Skyward",
        author: "Brandon Sanderson",
        pages: "503",
        read: "Read",
    },
    {
        name: "Starsight",
        author: "Brandon Sanderson",
        pages: "457",
        read: "Read",
    },
    {
        name: "Cytonic",
        author: "Brandon Sanderson",
        pages: "432",
        read: "Not Read",
    }
];

const bookName = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const pageCount = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const newBtn = document.querySelector(".addBook")
    .addEventListener("click", (e) => {
        let name = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementsByName("status");
    
        for (i = 0; i < read.length; i++) {
            if(read[i].checked) {
                read = read[i].value;
            }
        }
    
        let newBook = new Book(name, author, pages, read);
        myLibrary.push(newBook);
        updateLocalStorage();
        e.preventDefault();
        clearForm();
        displayBooks();
    });
const tableBody = document.querySelector("#table-body");
const table = document.querySelector("table")
    .addEventListener("click", (e) => {
        const currentBook = e.target.parentNode.parentNode.childNodes[1];
        if (e.target.innerHTML == "Delete") {
            if (confirm(`Are you sure you want to delete ${currentBook.innerText}?`))
            deleteBook(findBook(myLibrary, currentBook.innerText));
        }
        if (e.target.classList.contains("statusBtn")) {
            changeStatus(findBook(myLibrary, currentBook.innerText));
        }
        updateLocalStorage();
        displayBooks();
    })

class Book {

    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.card = function() {
            return name + " by " + author + ", " + pages + ", " + read;
        }
    }
}   

function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function checkLocalStorage() {
    if (localStorage.getItem("myLibrary")) {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    } else {
        myLibrary = DEFAULT_DATA;
    }
}

function changeStatus(Book) {
    if (myLibrary[Book].read === "Read") {
        myLibrary[Book].read = "Not Read"
    } else {
        myLibrary[Book].read = "Read";
    }
}

function deleteBook(currentBook) {
    myLibrary.splice(currentBook, currentBook + 1);
}

function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
        return;
    }
    for (Book of libraryArray) {
        if (Book.name === name) {
            return libraryArray.indexOf(Book);
        }
    }
}

function displayBooks() {
    checkLocalStorage();
    tableBody.innerHTML= "";
    myLibrary.forEach((Book) => {
        const htmlBook = `
        <tr>
            <td>${Book.name}</td>
            <td>${Book.author}</td>
            <td>${Book.pages}</td>
            <td><button class="statusBtn">${Book.read}</button></td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
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




