const libraryController = new LibraryController();
libraryController.renderLibrary();
setTimeout(() => {
  libraryController.addBook(new Book(1, "new Book", new Date(), {}));
  libraryController.updateLibraryName("new Library");
}, 3000);

const inputFromOtherComponent = document.querySelector(
  ".app__library-name-input"
);
// inputFromOtherComponent.addEventListener("input", (event) => {
//   libraryController.updateLibraryName(inputFromOtherComponent.value);
// });
