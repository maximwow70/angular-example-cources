const libraryStorage = new Storage("library");

// #region data
// const data = new Library("National Library", [
//   BookCreator.createKingBook("King book 1"),
//   BookCreator.createKingBook("King book 2"),
//   BookCreator.createRowlingBook("Rowling book 1"),
//   BookCreator.createRowlingBook("Rowling book 2"),
// ]);
// #endregion data

let libraryComponent = new LibraryComponent(
  document.querySelector(".app__library"),
  libraryStorage
);

// const libraryComponent1 = new LibraryComponent(
//   document.querySelector(".app__library"),
//   { name: "other", books: [new Book(0, "new book")] }
// );

// data binding
const inputFromOtherComponent = document.querySelector(
  ".app__library-name-input"
);
inputFromOtherComponent.addEventListener("input", (event) => {
  libraryComponent.updateLibraryName(inputFromOtherComponent.value);
});

// add book
// add book from enter

// remove book

// destroy
document
  .querySelector(".app__library-destroy")
  .addEventListener("click", () => {
    libraryComponent.destroy();
    libraryComponent = null;
  });

document.querySelector(".app__library-create").addEventListener("click", () => {
  libraryComponent = new LibraryComponent(
    document.querySelector(".app__library"),
    data
  );
});

const customBook = new BookBuilder().addName("name 1").addAuthor("au").build();

const customBook$ = new Observable(customBook);

customBook$.subscribe("1", (book) => {
  console.log(`action1 with: ${book.name}`);
});
customBook$.subscribe("2", (book) => {
  console.log(`action2 with: ${book.name}`);
});
customBook$.subscribe("3", (book) => {
  console.log(`action3 with: ${book.name}`);
});

customBook.name = "123";
customBook$.next(customBook);

window.customBook = customBook;
window.customBook$ = customBook$;
