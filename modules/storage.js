export default class Storage {
  static takingFromStorage() {
    let library;
    if (!localStorage.getItem('library')) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    return library;
  }

  static setLocalStorage(book) {
    const LIBRARY = Storage.takingFromStorage();
    LIBRARY.push(book);
    localStorage.setItem('library', JSON.stringify(LIBRARY));
  }

  static removeFromLocalStorage(text) {
    const LIBRARY = Storage.takingFromStorage();
    LIBRARY.forEach((book) => {
      if (
        `"${book.title}" by ${book.author}`.trim() === text.trim()
      ) {
        LIBRARY.splice(LIBRARY.indexOf(book), 1);
      }
    });
    localStorage.setItem('library', JSON.stringify(LIBRARY));
  }
}
