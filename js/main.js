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

  //   library.unshift(new Book(0, "name 0", new Date(), "Elon Mask"));
  //   console.log(library);

  //   const last = library.pop();
  //   console.log(last, library);

  //   console.log(library.concat(last));
  //   console.log(library);

  //   console.log(library.indexOf(book1));

  //   console.log(library.reverse());

  //   function getBooksByAuthor(books, author) {
  //     const booksByAuthor = [];
  //     for (let i = 0; i < books.length; i++) {
  //       if (books[i].author === author) {
  //         booksByAuthor.push(books[i]);
  //       }
  //     }
  //     return booksByAuthor;
  //   }

  //   function getBooksByAuthor2(books, author) {
  //     return books.filter((book) => book.author === author);
  //   }

  //   console.log("filtration:");
  //   console.log(getBooksByAuthor(library, "Elon Mask"));
  //   console.log(getBooksByAuthor(library, "Maksim"));

  //   console.log(getBooksByAuthor2(library, "Elon Mask"));

  //   console.log(library.find((book) => book.author === "Maksim"));
  //   console.log(library.find((book) => book.author === "asdasdasdas"));

  //   const authors = library.map((book) => book.author);
  //   console.log(authors);

  //   получить уникальные элементы

  //   setAuthor(3, "New Author");
  //   console.log(library);

  //   function sortByAuthor() {
  //     library = library.sort((book, otherBook) =>
  //       book.author < otherBook.author ? 1 : -1
  //     );
  //   }

  //   sortByAuthor();
  //   console.log(library);
})();
