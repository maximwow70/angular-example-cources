class Library {
  // #region fields
  name = "my library";
  books = [];
  // #endregion fields

  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  static fromJSON(json) {
    return new Library(
      json?.name || "",
      (json?.books || []).map((book) => Book.fromJSON(book))
    );
  }

  static toJSON(library) {
    return {
      name: library.name,
      books: (library.books || []).map(Book.toJSON),
    };
  }

  // #region methods
  addBook(book) {
    this.books = [...this.books, book];
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
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
