import Storage from './storage.js';

export const BOOK_STORAGE = document.querySelector(
  '.book-list__book-storage',
);
export const FORM = document.querySelector('form');
export const TITLE = FORM.elements[0];
export const AUTHOR = FORM.elements[1];
const DIV = document.createElement('div');
const P = document.createElement('p');
const BTN = document.createElement('button');

export default class Library {
  static displayLibrary() {
    const library = Storage.takingFromStorage();
    library.forEach((book) => Library.createBook(book));
  }

  static createBook(book) {
    const bookContainer = DIV.cloneNode(true);
    const bookText = P.cloneNode(true);
    const bookButton = BTN.cloneNode(true);

    BOOK_STORAGE.append(bookContainer);
    bookContainer.classList.add('book');
    bookContainer.append(bookText, bookButton);

    bookText.innerText = `"${book.title}" by ${book.author}`;
    bookButton.innerText = 'Remove';
    bookButton.classList.add('remove-btn');
  }

  static removeBook(element) {
    if (element.classList.contains('remove-btn')) {
      element.parentNode.remove();
    }
  }

  static clearInputs() {
    TITLE.value = '';
    AUTHOR.value = '';
  }
}
