class BookBuilder {
  name;
  author;
  details;
  date;

  constructor() {}

  addName(name) {
    this.name = name;
    return this;
  }

  addAuthor(author) {
    if (!this.name) {
      throw new Error("please, add name firstly");
    } else {
      this.author = author;
      return this;
    }
  }

  addDetails(details) {
    this.details = details;
    return this;
  }

  addDate(date) {
    this.date = date;
    return this;
  }

  build() {
    return new Book("0", this.name, new Date(), {}, this.author);
  }
}
