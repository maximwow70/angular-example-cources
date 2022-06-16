const data = new Library("National Library", [
  new Book(1, "name 1", new Date(), undefined),
  new Book(2, "name 2", new Date(), "Maksim"),
  new Book(3, "name 3", new Date(), "Alex"),
  new Book(4, "name 4", new Date(), "Elon Mask"),
]);

const libraryComponent = new LibraryComponent(
  document.querySelector(".app__library"),
  data
);

setTimeout(() => {
  libraryComponent.addBook(new Book(1, "new Book", new Date(), {}));
  libraryComponent.updateLibraryName("new Library");
}, 2000);

// const libraryComponent1 = new LibraryComponent(
//   document.querySelector(".app__library"),
//   { name: "other", books: [new Book()] }
// );

// data binding
// const inputFromOtherComponent = document.querySelector(
//   ".app__library-name-input"
// );
// inputFromOtherComponent.addEventListener("input", (event) => {
//   libraryComponent.updateLibraryName(inputFromOtherComponent.value);
// });

// add book

// remove book

// destroy
// setTimeout(() => {
//   libraryComponent.destroy();
// }, 5000);
