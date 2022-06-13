class Library {
  // #region fields
  name = "my library";
  books = [];
  // #endregion fields

  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  // #region methods
  addBook(book) {
    this.books = [...this.books, book];
  }

  setAuthor(id, newAuthor) {
    this.books = this.books.map((book) => {
      return book.id === id
        ? new Book(book.id, book.name, book.date, newAuthor)
        : book;
    });
  }

  readAllBooks() {
    this.books.forEach((book) => book.startRead());
  }
  // #endregion methods
}
