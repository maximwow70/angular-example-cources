class AudioBook extends Book {
  duration;
  constructor(id, name, author, duration) {
    super(id, name, new Date(), author);
    this.duration = duration;
  }

  startRead() {
    console.log(`AudioBook: start listen: ${this.name}`);
  }
}
