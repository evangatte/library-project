const addBtn = document.querySelector('#add_book')
const submitBtn = document.querySelector('#submit');
const closeBtn = document.querySelector('#shut');
const inputModalContainer = document.querySelector('.input_modal_container');
const inputModal = document.querySelector('.input_modal');
const bookContainer = document.querySelector('.books_container');
const bottomContainer = document.querySelector('.bottom_container');
const books = document.querySelector('#books')
const removeBtn = document.querySelector('.remove');

let newBook;
let myLibrary = []
let thisBook


addBtn.addEventListener('click', () => {
    inputModalContainer.style.display = 'block'
})




submitBtn.addEventListener('click', () => {
    inputModalContainer.style.display = 'none';
    createBook();
    render();
    myLibrary.splice(0, 3);
    
})






closeBtn.addEventListener('click', () => {
    inputModalContainer.style.display = 'none';

})






class Book {
    constructor(title, author, pages) {
        this.title = title.value;
        this.author = author.value;
        this.pages = pages.value;
        // this.info = function () {
        //     return `${title}, ${author}, ${pages}`;
        // };
    }
}


function addBookToLibrary() {
    thisBook = new Book(title, author, pages);
    myLibrary.push(thisBook.title, thisBook.author, thisBook.pages);
    myLibrary.forEach(val => {
        newBook.innerHTML += val + "<br>";
    })

}



function createBook() {
    thisBook = new Book(title, author, pages);
    myLibrary.push()
    
    let insertBtn;
    newBook = document.createElement('div')  
    newBook.setAttribute('class', 'books_container')

    addBookToLibrary();
    
    insertBtn = document.createElement('button')
    let text = document.createTextNode('Remove');
    insertBtn.appendChild(text);
    insertBtn.setAttribute('class', 'remove')
    newBook.appendChild(insertBtn);

    bottomContainer.appendChild(newBook);
        insertBtn.addEventListener('click', (target) => {
        newBook.remove(target);
     })



}
function render() {
    title.value = '';
    author.value = '';
    pages.value = '';

}

removeBtn.addEventListener('click', () => {
    bottomContainer.remove(bottomContainer.lastChild);    
})

















