// @flow
export default class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello(): string {
    return `My name is ${this.name}`;
  }
}
