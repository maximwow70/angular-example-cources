class LibraryRender {
  generateHTMLElement(className, text) {
    const HTMLElement = document.createElement("div");
    HTMLElement.classList.add(className);
    if (text) {
      HTMLElement.textContent = text;
    }
    return HTMLElement;
  }

  getBookElement(book) {
    const bookElement = this.generateHTMLElement("library__book");
    bookElement.appendChild(
      this.generateHTMLElement("library__book-id", `${book.id}:`)
    );
    bookElement.appendChild(
      this.generateHTMLElement("library__book-name", book.name)
    );
    bookElement.appendChild(
      this.generateHTMLElement("library__book-author", `(${book.author})`)
    );
    return bookElement;
  }

  renderLibrary(node, library) {
    node.innerHTML = "";

    const libraryHTMLElement = this.generateHTMLElement("library");

    const bookListHTMLElement = this.generateHTMLElement("library__books");
    library.books.forEach((book) => {
      bookListHTMLElement.appendChild(this.getBookElement(book));
    });

    libraryHTMLElement.appendChild(bookListHTMLElement);

    node.appendChild(libraryHTMLElement);
  }
}

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

  console.log(library.books);

  // library.readAllBooks();

  const libraryRender = new LibraryRender();
  libraryRender.renderLibrary(document.querySelector(".app__library"), library);

  setTimeout(() => {
    library.addBook(new AudioBook(5, "audio 1", "audio author", 100));
    library.addBook(new EBook(5, "E 1", "E author", "http://hehasd"));

    libraryRender.renderLibrary(
      document.querySelector(".app__library"),
      library
    );
  }, 3000);

  return {
    library: library,
  };
})();
