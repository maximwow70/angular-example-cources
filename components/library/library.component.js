class LibraryComponent {
  libraryRender;
  library;

  updateTimeout;
  onAddBookButtonClick = (event) => {
    this.addBook(
      new Book(
        this.getNewId(),
        this.libraryRender.newBookName,
        new Date(),
        {},
        "Unknown"
      )
    );
    this.libraryRender.newBookName = "";
    this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
      this.libraryRender.newBookName
    );
  };

  constructor(element, library) {
    this.libraryRender = new LibraryRender();
    this.library = library;
    this.libraryRender.render(element, this.library);
    // todo: separate method
    this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
      this.libraryRender.newBookName
    );

    this.updateTimeout = setTimeout(() => {
      this.addBook(new Book(1, "new Book", new Date(), {}));
      this.updateLibraryName("new Library");
      console.log("error");
    }, 2000);

    this.libraryRender.addBookButtonHTMLElement.addEventListener(
      "click",
      this.onAddBookButtonClick
    );

    this.libraryRender.addBookInputHTMLElement.addEventListener(
      "input",
      (event) => {
        this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
          this.libraryRender.newBookName
        );
      }
    );

    this.libraryRender.addBookInputHTMLElement.addEventListener(
      "keypress",
      (event) => {
        if (event.code === "Enter" && Boolean(this.libraryRender.newBookName)) {
          this.addBook(
            new Book(
              this.getNewId(),
              this.libraryRender.newBookName,
              new Date(),
              {},
              "Unknown"
            )
          );
          this.libraryRender.newBookName = "";
          this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
            this.libraryRender.newBookName
          );
        }
      }
    );

    this.libraryRender.bookListHTMLElement.addEventListener(
      "click",
      (event) => {
        const currentID = Number(event.target.getAttribute("data-id"));
        if (currentID !== null) {
          this.removeBook(currentID);
        }
      }
    );
  }

  addBook(book) {
    this.library.addBook(book);
    this.libraryRender.updateBooks(this.library);
  }

  removeBook(id) {
    this.library.removeBook(id);
    this.libraryRender.updateBooks(this.library);
  }

  updateLibraryName(name) {
    this.library.name = name;
    this.libraryRender.updateLibraryName(this.library);
  }

  getNewId() {
    return this.library.books.length > 0
      ? Math.max(...this.library.books.map((book) => book.id)) + 1
      : 0;
  }

  destroy() {
    clearTimeout(this.updateTimeout);
    this.libraryRender.addBookButtonHTMLElement.removeEventListener(
      "click",
      this.onAddBookButtonClick
    );
    this.libraryRender.destroy();
  }
}
