const appModule = (function () {
  const book1 = new Book(1, "name 1", new Date(), undefined);

  const library = new Library("National Library", [
    book1, // 0
    new Book(2, "name 2", new Date(), "Maksim"), // 1
    new Book(3, "name 3", new Date(), "Alex"), // 2
  ]);
  console.log(library.books);
  console.log(library.books[0]);
  console.log(library.books[library.books.length - 1]);

  library.addBook(new Book(4, "name 4", new Date(), "Elon Mask"));
  console.log(library);

  library.setAuthor(4, undefined);
  console.log(library);

  console.log(library.books[0].author);
  library.books[0].author = "";
  console.log(library.books[0].author);

  library.books[0].date = 5;
  console.log(library.books[0].date);

  library.addBook(new AudioBook(5, "audio 1", "audio author", 100));
  library.addBook(new EBook(5, "E 1", "E author", "http://hehasd"));
  console.log(library.books);

  // const library2 = new Library("", []);

  library.readAllBooks();

  return {
    library: library,
  };
})();
