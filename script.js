const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read == true) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read`;
        }
    }
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

function getBooks(array) {
    let card = document.createElement("div")
    let title = document.createElement("h2")
    let author = document.createElement("h3")
    let pages = document.createElement("p")
    let read = document.createElement("p")
    card.classList.add("card")
    title.classList.add("title")
    author.classList.add("author")
    pages.classList.add("pages")
    read.classList.add("read")
    
    for (let i = 0; i < array.length; i++) {
        title.textContent = array[i].title
        author.textContent = array[i].author
        pages.textContent = array[i].pages
        read.textContent = array[i].read    
        card.append(title, author, pages, read)
        document.body.append(card)
        console.log(array[i].info());
    }
}



const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const theQueer = new Book('The Queer', 'V.R.R. Tekken', 300, false);
const theWarrior = new Book('The Warrior', 'S.R.R. Token', 326, false);
const theElf = new Book('The Elf', 'G.R.R. Tintin', 891, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theQueer);
addBookToLibrary(theWarrior);
addBookToLibrary(theElf);

getBooks(myLibrary)