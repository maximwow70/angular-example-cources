class ComponentRender {
  createElement(tag, classList, html) {
    const element = document.createElement(tag);
    classList.forEach((className) => {
      element.classList.add(className);
    });
    if (html) {
      element.innerHTML = html;
    }
    return element;
  }
}

class LibraryRender extends ComponentRender {
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

  render(node, library, classList = []) {
    node.innerHTML = "";

    const libraryHTMLElement = this.createElement("div", [
      "library",
      ...classList,
    ]);

    libraryHTMLElement.appendChild(this.getTitleElement(library));
    libraryHTMLElement.appendChild(this.getBookListElement(library));

    node.appendChild(libraryHTMLElement);
  }
}
