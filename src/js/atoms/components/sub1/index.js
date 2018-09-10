export default class Sub2 {
  constructor(name) {
    this.name = name;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  walk() {
    console.log(`${this._name}が歩いてます`);
  }
}

console.log('this file is in sub1');
console.log('test');
