export default class Person {
  constructor(name: string) {
    this.name = name;
  }

  hello() {
    return `My name is ${this.name}`;
  }
}
