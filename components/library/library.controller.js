class LibraryController {
  libraryRender = new LibraryRender();

  library = new Library("National Library", [
    new Book(1, "name 1", new Date(), undefined),
    new Book(2, "name 2", new Date(), "Maksim"),
    new Book(3, "name 3", new Date(), "Alex"),
    new Book(4, "name 4", new Date(), "Elon Mask"),
  ]);

  library2 = new Library("USA Library", [
    new Book(1, "USA 1", new Date(), "USA"),
    new Book(2, "USA 2", new Date(), "USA"),
  ]);
  library2Config = ["in-body"];
  library2Container = document.querySelector(".app__usa-library");

  constructor() {}

  renderLibrary() {
    this.libraryRender.render(
      document.querySelector(".app__library"),
      this.library
    );
  }

  renderLibrary2() {
    this.libraryRender.render(
      this.library2Container,
      this.library2,
      this.library2Config
    );
    this.library2.addBook(new Book(3, "USA 3", new Date(), "USA other"));
    this.libraryRender.render(
      this.library2Container,
      this.library2,
      this.library2Config
    );
    setTimeout(() => {
      this.library2.addBook(new Book(4, "USA 4", new Date(), "USA other"));
      this.libraryRender.render(
        this.library2Container,
        this.library2,
        this.library2Config
      );
    }, 3000);
  }
}
