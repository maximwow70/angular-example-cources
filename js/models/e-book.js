class EBook extends Book {
  link;
  constructor(id, name, author, link) {
    super(id, name, new Date(), author);
    this.link = link;
  }

  startRead() {
    console.log(`EBook: start reading online: ${this.name}`);
  }
}
