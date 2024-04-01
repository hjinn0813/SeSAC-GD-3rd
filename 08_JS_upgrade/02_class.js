class House {
  // constructor : 생성자 함수. House라는 클래스의 속성을 초기화한다.
  constructor(name, age, window) {
    this.name = name; // 이 클래스에는 name이라는 key를 가질거고 value는 생성자 함수에서 전달받은 name이다
    this.age = age;
    this.window = window;
  }

  // method
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고, ${this.age}년 건축되었다.`
    );
  }
  consoleWindow() {
    console.log(`${this.name} 아파트의 창문은 ${this.window}개 입니다.`);
  }
}

// House 클래스를 사용해 오브젝트 만들기
const house1 = new House('고덕그라시움', 2020, 10);
console.log(house1);
console.log(typeof house1); // object
house1.consoleInfo();

// ----------------------------------------------------------------------------------------------------
// 클래스 상속 - 메소드, 속성 그대로 가져와서 사용
class Apartment extends House {
  constructor(name, age, window, floor, password) {
    super(name, age, window); // 인자로 작성된 부모의 속성 상속
    this.floor = floor; // apartment 클래스에서 사용할 속성 추가
    this.password = password;
  }

  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password}입니다.`);
  }

  // 오버라이딩 : 기존 메소드를 재정의하는 것
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window}개이고, 
      총 ${this.floor}층이므로,
      모든 창문의 개수는 ${this.window * this.floor}입니다.`
    );
  }
}

const apt1 = new Apartment('Ipark', 2017, 6, 20, 1234);
console.log(apt1);
apt1.consoleWindow(); // 새롭게 정의된 메소드 사용
apt1.consolePassword(); // 새로운 메소드 추가 가능
apt1.consoleInfo(); // 부모 메소드에서 상속받았기 때문에 출력 가능

// ----------------------------------------------------------------------------------------------------
// 실습 - 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// rec1 = 인스턴스
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 선택 실습 - 원
class Circle extends Shape {
  constructor(height, width, radius) {
    super(height, width);
    this.radius = radius;
  }

  getArea() {
    return (this.width / 2) ** 2 * this.radius;
  }
}

const cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());
