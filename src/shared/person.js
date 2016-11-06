export default class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return `My name is ${this.name}`;
  }
}
