const appModule = (function () {
  const book1 = new Book(1, "name 1", new Date(), undefined);
  const library = new Library("National Library", [
    book1,
    new Book(2, "name 2", new Date(), "Maksim"),
    new Book(3, "name 3", new Date(), "Alex"),
  ]);
  library.addBook(new Book(4, "name 4", new Date(), "Elon Mask"));

  return {
    library: library,
  };
})();
