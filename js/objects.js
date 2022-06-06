const obj = function (...arg) {};

function AlphaAnimal(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;

  this.getFirstNameLetter = function () {
    return this.name[0];
  };

  this.getFullInfo = function (additionalInfo) {
    const myNewSuperTitle = "akdjaskdmlasld";
    console.log("1");
    return `
        id: ${this.id},
        name: ${this.name},
        age: ${this.age},
        additionalInfo: ${additionalInfo},
        adasdasd: ${myNewSuperTitle},
        oiqowieoiqwe: ${this.getFirstNameLetter()}
    `;
    // return "id:" + this.id + ",name" + this.getFirstNameLetter();
  };
}
const alpha = new AlphaAnimal(1, "animal 1", 20);
console.log(alpha.getFullInfo("privet"));

const alphaB = new AlphaAnimal(2, "qwe", 20);
console.log(alphaB.getFullInfo("qwealsdlaskldlasjlkd"));

const user = { name: "Alex" };

function Permissions(admin, simple) {
  this.admin = admin;
  this.simple;
}
Performance.prototype.clone = function () {
  return new Permissions(this.admin, this.simple);
};

function User(id, name, permissions) {
  this.id = id;
  this.name = name; 

  this.permissions = permissions;
}
User.prototype.getInfo = function () {
  return `${this.id} ${this.name}`;
};
User.prototype.clone = function () {
  return new User(
      this.id,
      this.name,
      this.permissions.clone()
    );
};

const currentUser = new User(1, "Alex");
console.log(currentUser);

const anotherUser = currentUser.clone();
console.log(anotherUser);

console.log(currentUser === anotherUser);
