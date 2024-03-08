// 함수 내보내는 방법
// 1. 함수 앞에 export 키워드 사용
export function consoleName(name) {
  console.log(`당신의 이름은 ${name}입니다`);
}
export function consoleName2(name) {
  console.log(`당신의 이름은 ${name}입니다 2`);
}

// default 키워드 작성시 해당 함수가 파일의 대표 함수가 된다.
export default function consoleNameMain(name) {
  console.log(`당신의 이름은 ${name} main 함수`);
}

// 2. 마지막에 모아서 export문 작성해서 내보내기 가능
export function consoleName(name) {
  console.log(`당신의 이름은 ${name}입니다`);
}
export function consoleName2(name) {
  console.log(`당신의 이름은 ${name}입니다 2`);
}
export { consoleName, consoleName2 };
