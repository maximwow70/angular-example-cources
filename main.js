// #region data
const data = new Library("National Library", [
  new Book(1, "name 1", new Date(), undefined),
  new Book(2, "name 2", new Date(), "Maksim"),
  new Book(3, "name 3", new Date(), "Alex"),
  new Book(4, "name 4", new Date(), "Elon Mask"),
]);
// #endregion data

let libraryComponent = new LibraryComponent(
  document.querySelector(".app__library"),
  data
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
