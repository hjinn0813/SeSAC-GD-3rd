// common js - 한번에 module.exports 시키기

const colors = ['pink', 'blue', 'yellow'];

const sayHi = function () {
  console.log('안녕하세요! sayHi 함수입니다!');
};

function sayName(name) {
  console.log('my name is ' + name + ' sayName 함수입니다');
  sayHi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

module.exports = { colors, sayName, Person };
// sayHi 불러오지 않아도 정상 작동함
