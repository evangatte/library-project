const addBtn = document.querySelector('#add_book')
const submitBtn = document.querySelector('#submit');
const closeBtn = document.querySelector('#shut');
const inputModalContainer = document.querySelector('.input_modal_container');
const inputModal = document.querySelector('.input_modal');
const bookContainer = document.querySelector('.books_container');
const bottomContainer = document.querySelector('.bottom_container');
const removeBtn = document.querySelector('.remove');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const checkBox = document.getElementById('checkbox');
let newBook;





addBtn.addEventListener('click', () => {
    inputModalContainer.style.display = 'block';
})


submitBtn.addEventListener('click', () => {
    if(title.value == '', author.value == '', pages.value == ''){
        inputModalContainer.style.display = 'none';
        checkBox.checked = false;
    } else {
    createBook();
    render()
   }  
})



closeBtn.addEventListener('click', () => {
    inputModalContainer.style.display = 'none';

})



class Book {
    constructor(title, author, pages) {
        this.title = title.value;
        this.author = author.value;
        this.pages = pages.value;
    }
}


function addBookToLibrary() {
    let books = new Book(title, author, pages);
    newBook.innerHTML += books.title + "<br>"
    newBook.innerHTML += books.author + "<br>"
    newBook.innerHTML += books.pages + "<br>"
}



function createBook() {
    newBook = document.createElement('div');  
    newBook.setAttribute('class', 'books_container');


    addBookToLibrary();
    createCheckBox();



    let insertBtn = document.createElement('button');
    let text = document.createTextNode('Remove');
    insertBtn.appendChild(text);
    insertBtn.setAttribute('class', 'remove')
    newBook.appendChild(insertBtn);
    bottomContainer.appendChild(newBook);

 
    insertBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })
}

//clears placeholders 
function render() {
    title.value = '';
    author.value = '';
    pages.value = '';
    inputModalContainer.style.display = 'none'
    checkBox.checked = false;
}


removeBtn.addEventListener('click', () => {
    bottomContainer.remove(bottomContainer.lastChild);    
})


function createCheckBox() {
    let disCheckBoxContianer = document.createElement('div');
    disCheckBoxContianer.setAttribute('class', 'read_container')
    let readOrNot = document.createTextNode('Read:');
    disCheckBoxContianer.appendChild(readOrNot);    
    
     let disCheckBox = document.createElement('input');    
     disCheckBox.setAttribute('type', 'checkbox');
    disCheckBox.setAttribute('id', 'display_checkbox')

     disCheckBoxContianer.appendChild(disCheckBox);

    newBook.appendChild(disCheckBoxContianer)
    
    if (checkBox.checked == true) {
        disCheckBoxContianer.lastChild.checked =  true;
    }
}










