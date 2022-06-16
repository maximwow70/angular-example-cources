class LibraryComponent {
  libraryRender = new LibraryRender();

  library;

  constructor(element, library) {
    this.library = library;
    this.libraryRender.render(element, this.library);
  }

  addBook(book) {
    this.library.addBook(book);
    this.libraryRender.updateBooks(this.library);
  }

  updateLibraryName(name) {
    this.library.name = name;
    this.libraryRender.updateLibraryName(this.library);
  }

  destroy() {
    this.libraryRender.destroy();
  }
}
