class LibraryController {
  libraryRender = new LibraryRender();

  library = new Library("National Library", [
    new Book(1, "name 1", new Date(), undefined),
    new Book(2, "name 2", new Date(), "Maksim"),
    new Book(3, "name 3", new Date(), "Alex"),
    new Book(4, "name 4", new Date(), "Elon Mask"),
  ]);

  constructor() {}

  renderLibrary() {
    this.libraryRender.render(
      document.querySelector(".app__library"),
      this.library
    );
  }

  addBook(book) {
    this.library.addBook(book);
    this.libraryRender.updateBooks(this.library);
  }

  updateLibraryName(name) {
    this.library.name = name;
    this.libraryRender.updateLibraryName(this.library);
  }
}
