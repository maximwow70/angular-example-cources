class Book {
  static defaultAuthor = "Default Author";

  id;
  name;
  details;

  _date;
  get date() {
    return this._date;
  }

  _author;
  get author() {
    return this._author;
  }
  set author(author) {
    if (Boolean(author)) {
      this._author = author;
    } else {
      console.error("invalid author");
    }
  }

  constructor(id, name, date, details, author = Book.getDefaultAuthor()) {
    this.id = id;
    this.name = name;
    this._date = date;
    this.details = details;
    this.author = author;
  }

  static fromJSON(json) {
    return new Book(json.id, json.name, json.date, json.details, json.author);
  }

  static toJSON(book) {
    return {
      id: book.id,
      name: book.name,
      date: book._date,
      details: book.details,
      author: book._author,
    };
  }

  static getDefaultAuthor() {
    return Book.defaultAuthor + "$";
  }

  startRead() {
    console.log(`Simple Book: start reading: ${this.name}`);
  }
}
