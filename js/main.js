(function () {
  const book1 = new Book(1, "name 1", new Date(), "Elon Mask");

  const library = new Library(
    [
      book1, // 0
      new Book(2, "name 2", new Date(), "Maksim"), // 1
      new Book(3, "name 3", new Date(), "Alex"), // 2
    ],
    "National Library"
  );
  console.log(library.books);
  console.log(library.books[0]);
  console.log(library.books[library.length - 1]);

  library.addBook(new Book(4, "name 4", new Date(), "Elon Mask"));
  console.log(library);

  library.setAuthor(10, "Vasya");
  console.log(library);
})();
