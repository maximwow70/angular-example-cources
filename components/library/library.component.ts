class LibraryComponent {
  libraryRender;
  library;
  storage;

  updateTimeout;
  onAddBookButtonClick = (event) => {
    this.addBook(
      BookCreator.createDefaultBook(this.libraryRender.newBookName)
    );
    this.libraryRender.newBookName = "";
    this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
      this.libraryRender.newBookName
    );
  };

  constructor(element, storage) {
    this.storage = storage;

    this.libraryRender = new LibraryRender();
    this.library = Library.fromJSON(JSON.parse(this.storage.getData()));

    // render
    this.libraryRender.render(element, this.library);
    // todo: separate method
    this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(
      this.libraryRender.newBookName
    );
    // render end

    // storage
    this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
    // storage end

    // this.updateTimeout = setTimeout(() => {
    //   this.addBook(BookCreator.createDefaultBook("book from timeout"));
    //   this.updateLibraryName("new Library");
    //   console.log(this.library.books);
    // }, 2000);

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
          this.addBook(createDefaultBook(this.libraryRender.newBookName));
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
    this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
  }

  removeBook(id) {
    this.library.removeBook(id);
    this.libraryRender.updateBooks(this.library);
    this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
  }

  updateLibraryName(name) {
    this.library.name = name;
    this.libraryRender.updateLibraryName(this.library);
    this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
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
