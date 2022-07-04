class Storage {
  key;

  constructor(key) {
    this.key = key;
  }

  saveData(data) {
    localStorage.setItem(this.key, data);
  }

  getData() {
    return localStorage.getItem(this.key) || "null";
  }
}
