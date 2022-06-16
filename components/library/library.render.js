class LibraryRender extends ComponentRender {
  libraryHTMLElement;

  titleHTMLElement;
  bookListHTMLElement;

  addBookInputHTMLElement;
  addBookButtonHTMLElement;

  getBookElements(library) {
    return library.books.map((book) => {
      return this.createElement("div", ["library__book"], book.name);
    });
  }

  getBookListElement(library) {
    const bookListHTMLElement = this.createElement("div", [
      "library__book-list",
    ]);

    const bookHTMLElements = this.getBookElements(library);
    bookHTMLElements.forEach((element) =>
      bookListHTMLElement.appendChild(element)
    );
    return bookListHTMLElement;
  }

  getTitleElement(library) {
    return this.createElement(
      "div",
      ["library__title"],
      `<em>${library.name}</em>`
    );
  }

  getAddBookElement() {
    const addBookHTMLElement = this.createElement("div", ["library__add-book"]);

    const inputElement = this.createElement("input", [
      "library__add-book-input",
    ]);
    addBookHTMLElement.appendChild(inputElement);

    const buttonElement = this.createElement(
      "button",
      ["library__add-book-button"],
      "add"
    );
    addBookHTMLElement.appendChild(buttonElement);

    return addBookHTMLElement;
  }

  render(node, library, classList = []) {
    // shouldn't do this
    // node.innerHTML = "";

    this.libraryHTMLElement = this.createElement("div", [
      "library",
      ...classList,
    ]);

    this.titleHTMLElement = this.getTitleElement(library);
    this.libraryHTMLElement.appendChild(this.titleHTMLElement);

    this.bookListHTMLElement = this.getBookListElement(library);
    this.libraryHTMLElement.appendChild(this.bookListHTMLElement);

    const addBookHTMLElement = this.getAddBookElement();
    this.addBookInputHTMLElement = addBookHTMLElement.children[0];
    this.addBookButtonHTMLElement = addBookHTMLElement.children[1];
    this.libraryHTMLElement.appendChild(addBookHTMLElement);

    node.appendChild(this.libraryHTMLElement);
  }

  destroy() {
    this.libraryHTMLElement.remove();
  }

  updateBooks(library) {
    this.bookListHTMLElement.innerHTML = "";
    const bookHTMLElements = this.getBookElements(library);
    bookHTMLElements.forEach((element) =>
      this.bookListHTMLElement.appendChild(element)
    );
  }

  updateLibraryName(library) {
    this.updateElement(
      this.titleHTMLElement,
      undefined,
      `<em>${library.name}</em>`
    );
  }
}
