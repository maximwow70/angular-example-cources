class BookCreator {
  static getBookId() {
    return String(Math.random()).split(".")[1];
  }

  static createDefaultBook(name) {
    return new Book(
      BookCreator.getBookId(),
      name,
      new Date(),
      {},
      "Unknown"
    );
  }

  static createKingBook(name) {
    return new Book(
      `${BookCreator.getBookId()}-King`,
      name,
      new Date(),
      {},
      "King"
    );
  }

  static createRowlingBook(name) {
    return new Book(
      `${BookCreator.getBookId()}-Rowling`,
      name,
      new Date(),
      {},
      "Rowling"
    );
  }
}
