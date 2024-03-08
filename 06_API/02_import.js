/* 다른 js 파일의 함수나 변수를 불러와 사용하기
export(내보내기), import(불러오기) 키워드 사용
불필요한 코드 반복을 줄이고 효율적인 개발 가능, 유지보수 용이 */

// 함수 불러오기
/* export 키워드만 작성한 경우 중괄호에 감싸서 작성.
export default 키워드 작성하면 중괄호 없이 불러온다.
한 줄로 default 함수와 다른 함수들 한번에 불러올 수 있음. */
import { consoleName, consoleName2 } from './02_util.js';
consoleName('layla');
consoleName2('a');

import consoleNameMain from './02_util.js';
consoleNameMain('b');

import consoleNameMain, { consoleName, consoleName2 } from './02_util.js';

// 여러 파일 import 할 수 있다
// import plus, { minus } from './calc.js';
consoleName('layla');
consoleName2('a');
consoleNameMain('b');
