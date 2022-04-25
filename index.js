/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import Book from './modules/book.js';
import Storage from './modules/storage.js';
import Library, {
  BOOK_STORAGE,
  FORM,
  TITLE,
  AUTHOR,
} from './modules/library.js';
import CLOCK from './modules/clock.js';

const ADD_BUTTON = FORM.elements[2];
Library.displayLibrary();

ADD_BUTTON.addEventListener('click', () => {
  const BOOK = new Book(TITLE.value, AUTHOR.value);
  Library.createBook(BOOK);
  Storage.setLocalStorage(BOOK);
  Library.clearInputs();
});

BOOK_STORAGE.addEventListener('click', (e) => {
  const TEXT = e.target.parentNode.children[0].textContent;
  Library.removeBook(e.target);
  Storage.removeFromLocalStorage(TEXT);
});

// Section pages

const NAV_LINKS = document.querySelector('.nav__links');
const LIST = document.querySelector('.book-list');
const ADD = document.querySelector('.add-book');
const CONTACT = document.querySelector('.contact');

NAV_LINKS.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('List')) {
    ADD.classList.remove('active');
    CONTACT.classList.remove('active');
    LIST.classList.add('active');
  } else if (e.target.classList.contains('New')) {
    CONTACT.classList.remove('active');
    LIST.classList.remove('active');
    ADD.classList.add('active');
  } else {
    LIST.classList.remove('active');
    ADD.classList.remove('active');
    CONTACT.classList.add('active');
  }
});
