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

  static getDefaultAuthor() {
    return Book.defaultAuthor + "$";
  }

  startRead() {
    console.log(`Simple Book: start reading: ${this.name}`);
  }
}

new Book(1, "name", new Date(), new BookDetails(info, pages), "author");

class Duck {
  // ...
  goBehavior = new FlyBehavior();

  constructor(goBehavior) {
    this.goBehavior = goBehavior;
  }
}

const d = new Duck(new FlyBehavior());
const w = new Duck(new WalkBehavior());
const s = new Duck(new SwimBehavior());

[d, w, s].forEach((item) => item.goBehavior.go(400, 200));

d.goBehavior = new WalkBehavior();

[d, w, s].forEach((item) => item.goBehavior.go(200, 1));

class GoBehavior {
  go() {}
}

class FlyBehavior extends Go {
  go() {}
}

class WalkBehavior extends Go {
  go() {}
}

class SwimBehavior extends Go {
  go() {}
}

swim();
walk();
fly();
