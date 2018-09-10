import { log } from 'util';

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
    console.log('cat');
  }
}

console.log('this file is in sub2!!');
console.log('this file is in sub2');
console.log('this is one comment in sub2');
console.log('this is another comment in sub2');
console.log('this is some comment in sub2');
