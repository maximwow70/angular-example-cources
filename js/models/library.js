function Library(books, name) {
  this.books = books;
  this.name = name;
}
Library.prototype.addBook = function (book) {
  this.books = [...this.books, book];
};
Library.prototype.setAuthor = function (id, newAuthor) {
  this.books = this.books.map((book) => {
    return {
        ...book,
        author: book.id === id ? newAuthor : book.author
    };
  });
};
