var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var libraryStorage = new Storage("library");
var libraryComponent = new LibraryComponent(document.querySelector(".app__library"), libraryStorage);
var inputFromOtherComponent = document.querySelector(".app__library-name-input");
inputFromOtherComponent.addEventListener("input", function (event) {
    libraryComponent.updateLibraryName(inputFromOtherComponent.value);
});
document
    .querySelector(".app__library-destroy")
    .addEventListener("click", function () {
    libraryComponent.destroy();
    libraryComponent = null;
});
document.querySelector(".app__library-create").addEventListener("click", function () {
    libraryComponent = new LibraryComponent(document.querySelector(".app__library"), data);
});
var customBook = new BookBuilder().addName("name 1").addAuthor("au").build();
var customBook$ = new Observable(customBook);
customBook$.subscribe("1", function (book) {
    console.log("action1 with: ".concat(book.name));
});
customBook$.subscribe("2", function (book) {
    console.log("action2 with: ".concat(book.name));
});
customBook$.subscribe("3", function (book) {
    console.log("action3 with: ".concat(book.name));
});
customBook.name = "123";
customBook$.next(customBook);
window.customBook = customBook;
window.customBook$ = customBook$;
define("my-component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Component = void 0;
    var Component = (function () {
        function Component() {
        }
        return Component;
    }());
    exports.Component = Component;
    var c = new Component();
});
define("components/component-render", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentRender = void 0;
    var ComponentRender = (function () {
        function ComponentRender() {
        }
        ComponentRender.prototype.createElement = function (tag, classList, html) {
            var element = document.createElement(tag);
            this.updateElement(element, classList, html);
            return element;
        };
        ComponentRender.prototype.updateElement = function (element, classList, html) {
            if (classList) {
                element.setAttribute("class", "");
                classList.forEach(function (className) {
                    element.classList.add(className);
                });
            }
            if (html) {
                element.innerHTML = html;
            }
        };
        return ComponentRender;
    }());
    exports.ComponentRender = ComponentRender;
});
var Observable = (function () {
    function Observable(initialData) {
        this.subscribers = [];
        this._data = initialData;
    }
    Observable.prototype.subscribe = function (id, action) {
        this.subscribers = __spreadArray(__spreadArray([], this.subscribers, true), [{ id: id, action: action }], false);
    };
    Observable.prototype.unsubscribe = function (id) {
        this.subscribers = this.subscribers.filter(function (s) { return s.id !== id; });
    };
    Observable.prototype.next = function (data) {
        var _this = this;
        this._data = data;
        this.subscribers.forEach(function (subscriber) { return subscriber.action(_this._data); });
    };
    return Observable;
}());
var Storage = (function () {
    function Storage(key) {
        this.key = key;
    }
    Storage.prototype.saveData = function (data) {
        localStorage.setItem(this.key, data);
    };
    Storage.prototype.getData = function () {
        return localStorage.getItem(this.key) || "null";
    };
    return Storage;
}());
var LibraryComponent = (function () {
    function LibraryComponent(element, storage) {
        var _this = this;
        this.onAddBookButtonClick = function (event) {
            _this.addBook(BookCreator.createDefaultBook(_this.libraryRender.newBookName));
            _this.libraryRender.newBookName = "";
            _this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(_this.libraryRender.newBookName);
        };
        this.storage = storage;
        this.libraryRender = new LibraryRender();
        this.library = Library.fromJSON(JSON.parse(this.storage.getData()));
        this.libraryRender.render(element, this.library);
        this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(this.libraryRender.newBookName);
        this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
        this.libraryRender.addBookButtonHTMLElement.addEventListener("click", this.onAddBookButtonClick);
        this.libraryRender.addBookInputHTMLElement.addEventListener("input", function (event) {
            _this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(_this.libraryRender.newBookName);
        });
        this.libraryRender.addBookInputHTMLElement.addEventListener("keypress", function (event) {
            if (event.code === "Enter" && Boolean(_this.libraryRender.newBookName)) {
                _this.addBook(createDefaultBook(_this.libraryRender.newBookName));
                _this.libraryRender.newBookName = "";
                _this.libraryRender.addBookButtonHTMLElement.disabled = !Boolean(_this.libraryRender.newBookName);
            }
        });
        this.libraryRender.bookListHTMLElement.addEventListener("click", function (event) {
            var currentID = Number(event.target.getAttribute("data-id"));
            if (currentID !== null) {
                _this.removeBook(currentID);
            }
        });
    }
    LibraryComponent.prototype.addBook = function (book) {
        this.library.addBook(book);
        this.libraryRender.updateBooks(this.library);
        this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
    };
    LibraryComponent.prototype.removeBook = function (id) {
        this.library.removeBook(id);
        this.libraryRender.updateBooks(this.library);
        this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
    };
    LibraryComponent.prototype.updateLibraryName = function (name) {
        this.library.name = name;
        this.libraryRender.updateLibraryName(this.library);
        this.storage.saveData(JSON.stringify(Library.toJSON(this.library)));
    };
    LibraryComponent.prototype.destroy = function () {
        clearTimeout(this.updateTimeout);
        this.libraryRender.addBookButtonHTMLElement.removeEventListener("click", this.onAddBookButtonClick);
        this.libraryRender.destroy();
    };
    return LibraryComponent;
}());
var LibraryRender = (function (_super) {
    __extends(LibraryRender, _super);
    function LibraryRender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LibraryRender.prototype, "newBookName", {
        get: function () {
            return this.addBookInputHTMLElement.value;
        },
        set: function (value) {
            this.addBookInputHTMLElement.value = value;
        },
        enumerable: false,
        configurable: true
    });
    LibraryRender.prototype.getBookElements = function (library) {
        var _this = this;
        return library.books.map(function (book) {
            var bookHTMLElement = _this.createElement("div", ["library__book"], book.name);
            bookHTMLElement.setAttribute("data-id", book.id);
            return bookHTMLElement;
        });
    };
    LibraryRender.prototype.getBookListElement = function (library) {
        var bookListHTMLElement = this.createElement("div", [
            "library__book-list",
        ]);
        var bookHTMLElements = this.getBookElements(library);
        bookHTMLElements.forEach(function (element) {
            return bookListHTMLElement.appendChild(element);
        });
        return bookListHTMLElement;
    };
    LibraryRender.prototype.getTitleElement = function (library) {
        return this.createElement("div", ["library__title"], "<em>".concat(library.name, "</em>"));
    };
    LibraryRender.prototype.getAddBookElement = function () {
        var addBookHTMLElement = this.createElement("div", ["library__add-book"]);
        var inputElement = this.createElement("input", [
            "library__add-book-input",
        ]);
        addBookHTMLElement.appendChild(inputElement);
        var buttonElement = this.createElement("button", ["library__add-book-button"], "add");
        addBookHTMLElement.appendChild(buttonElement);
        return addBookHTMLElement;
    };
    LibraryRender.prototype.render = function (node, library, classList) {
        if (classList === void 0) { classList = []; }
        this.libraryHTMLElement = this.createElement("div", __spreadArray([
            "library"
        ], classList, true));
        this.titleHTMLElement = this.getTitleElement(library);
        this.libraryHTMLElement.appendChild(this.titleHTMLElement);
        this.bookListHTMLElement = this.getBookListElement(library);
        this.libraryHTMLElement.appendChild(this.bookListHTMLElement);
        var addBookHTMLElement = this.getAddBookElement();
        this.addBookInputHTMLElement = addBookHTMLElement.children[0];
        this.addBookButtonHTMLElement = addBookHTMLElement.children[1];
        this.libraryHTMLElement.appendChild(addBookHTMLElement);
        node.appendChild(this.libraryHTMLElement);
    };
    LibraryRender.prototype.destroy = function () {
        this.libraryHTMLElement.remove();
    };
    LibraryRender.prototype.updateBooks = function (library) {
        var _this = this;
        this.bookListHTMLElement.innerHTML = "";
        var bookHTMLElements = this.getBookElements(library);
        bookHTMLElements.forEach(function (element) {
            return _this.bookListHTMLElement.appendChild(element);
        });
    };
    LibraryRender.prototype.updateLibraryName = function (library) {
        this.updateElement(this.titleHTMLElement, undefined, "<em>".concat(library.name, "</em>"));
    };
    return LibraryRender;
}(ComponentRender));
var AudioBook = (function (_super) {
    __extends(AudioBook, _super);
    function AudioBook(id, name, author, duration) {
        var _this = _super.call(this, id, name, new Date(), author) || this;
        _this.duration = duration;
        return _this;
    }
    AudioBook.prototype.startRead = function () {
        console.log("AudioBook: start listen: ".concat(this.name));
    };
    return AudioBook;
}(Book));
var BookDetails = (function () {
    function BookDetails() {
    }
    BookDetails.prototype.getFullDetails = function () {
        return "asdasdas";
    };
    return BookDetails;
}());
var BookBuilder = (function () {
    function BookBuilder() {
    }
    BookBuilder.prototype.addName = function (name) {
        this.name = name;
        return this;
    };
    BookBuilder.prototype.addAuthor = function (author) {
        if (!this.name) {
            throw new Error("please, add name firstly");
        }
        else {
            this.author = author;
            return this;
        }
    };
    BookBuilder.prototype.addDetails = function (details) {
        this.details = details;
        return this;
    };
    BookBuilder.prototype.addDate = function (date) {
        this.date = date;
        return this;
    };
    BookBuilder.prototype.build = function () {
        return new Book("0", this.name, new Date(), {}, this.author);
    };
    return BookBuilder;
}());
var BookCreator = (function () {
    function BookCreator() {
    }
    BookCreator.getBookId = function () {
        return String(Math.random()).split(".")[1];
    };
    BookCreator.createDefaultBook = function (name) {
        return new Book(BookCreator.getBookId(), name, new Date(), {}, "Unknown");
    };
    BookCreator.createKingBook = function (name) {
        return new Book("".concat(BookCreator.getBookId(), "-King"), name, new Date(), {}, "King");
    };
    BookCreator.createRowlingBook = function (name) {
        return new Book("".concat(BookCreator.getBookId(), "-Rowling"), name, new Date(), {}, "Rowling");
    };
    return BookCreator;
}());
var Book = (function () {
    function Book(id, name, date, details, author) {
        if (author === void 0) { author = Book.getDefaultAuthor(); }
        this.id = id;
        this.name = name;
        this._date = date;
        this.details = details;
        this.author = author;
    }
    Object.defineProperty(Book.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (author) {
            if (Boolean(author)) {
                this._author = author;
            }
            else {
                console.error("invalid author");
            }
        },
        enumerable: false,
        configurable: true
    });
    Book.fromJSON = function (json) {
        return new Book(json.id, json.name, json.date, json.details, json.author);
    };
    Book.toJSON = function (book) {
        return {
            id: book.id,
            name: book.name,
            date: book._date,
            details: book.details,
            author: book._author,
        };
    };
    Book.getDefaultAuthor = function () {
        return Book.defaultAuthor + "$";
    };
    Book.prototype.startRead = function () {
        console.log("Simple Book: start reading: ".concat(this.name));
    };
    Book.defaultAuthor = "Default Author";
    return Book;
}());
var EBook = (function (_super) {
    __extends(EBook, _super);
    function EBook(id, name, author, link) {
        var _this = _super.call(this, id, name, new Date(), author) || this;
        _this.link = link;
        return _this;
    }
    EBook.prototype.startRead = function () {
        console.log("EBook: start reading online: ".concat(this.name));
    };
    return EBook;
}(Book));
var Library = (function () {
    function Library(name, books) {
        this.name = "my library";
        this.books = [];
        this.name = name;
        this.books = books;
    }
    Library.fromJSON = function (json) {
        return new Library((json === null || json === void 0 ? void 0 : json.name) || "", ((json === null || json === void 0 ? void 0 : json.books) || []).map(function (book) { return Book.fromJSON(book); }));
    };
    Library.toJSON = function (library) {
        return {
            name: library.name,
            books: (library.books || []).map(Book.toJSON),
        };
    };
    Library.prototype.addBook = function (book) {
        this.books = __spreadArray(__spreadArray([], this.books, true), [book], false);
    };
    Library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    Library.prototype.setAuthor = function (id, newAuthor) {
        this.books = this.books.map(function (book) {
            return book.id === id
                ? new Book(book.id, book.name, book.date, newAuthor)
                : book;
        });
    };
    Library.prototype.readAllBooks = function () {
        this.books.forEach(function (book) { return book.startRead(); });
    };
    return Library;
}());
(function () {
    navigator.geolocation.getCurrentPosition(function (location) {
        var apiKey = "cdd4f90e348dd8e37545ca74eb334f05";
        var apiBase = "https://api.openweathermap.org/data/2.5/onecall";
        fetch("".concat(apiBase, "?lat=").concat(location.coords.latitude, "&lon=").concat(location.coords.longitude, "&appid=").concat(apiKey))
            .then(function (response) {
            console.log(response);
            return response.json();
        })
            .then(function (data) {
            document.querySelector(".weather").innerHTML = "\n            <div>temp: ".concat((data.current.temp - 273).toFixed(2), " C</div>\n            <div>humidity: ").concat(data.current.humidity, " %</div>\n            <div>pressure: ").concat(data.current.pressure, "</div>\n        ");
        });
        var options = {
            method: "POST",
            headers: {
                "X-RapidAPI-Key": "45cdbb94c0mshcb7a755e815b533p1e674ejsn7b059bfb7178",
                "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            },
        };
        fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today", options)
            .then(function (response) { return response.json(); })
            .then(function (response) { return console.log(response); })
            .catch(function (err) { return console.error(err); });
    });
})();
//# sourceMappingURL=main.js.map