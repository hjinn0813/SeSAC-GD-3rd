// generic
function printSth<T>(x: T): T {
  console.log(x);
  return x;
}

printSth<string>('hello');
printSth<number>(1);

// 두 개의 다른 인자 generic으로 받기
function getTwoParams<T, K>(x: T, y: K): void {
  console.log(x, y);
}
getTwoParams<number, string>(1, '2');
getTwoParams<number[], string[]>([1, 2, 3], ['1', '2']);

// ==================================================================
// interface에서의 generic
console.log('--- interface에서의 generic ---');

interface Phone<T> {
  name: string;
  company: string;
  price: number;
  option: T; // 어떤 value가 들어올지 몰라서 T
}
const iphone15: Phone<string> = {
  name: 'iphone15',
  company: 'apple',
  price: 130,
  option: 'lightblue',
};

const flip2: Phone<string[]> = {
  name: 'flip2',
  company: 'samsung',
  price: 180,
  option: ['black', 'white', 'purple'],
};

// generic으로 넘겨줄 T를 type으로 선언
type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  name: 'iphone16',
  company: 'apple',
  price: 180,
  option: {
    color: 'silver',
    storage: 256,
  },
};
