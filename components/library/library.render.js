class ComponentRender {
  createElement(tag, classList, html) {
    const element = document.createElement(tag);
    this.updateElement(element, classList, html);
    return element;
  }
  updateElement(element, classList, html) {
    if (classList) {
      element.setAttribute("class", "");
      classList.forEach((className) => {
        element.classList.add(className);
      });
    }
    if (html) {
      element.innerHTML = html;
    }
  }
}

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

    const addBook = this.getAddBookElement();
    this.libraryHTMLElement.appendChild(addBook);

    node.appendChild(this.libraryHTMLElement);
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
