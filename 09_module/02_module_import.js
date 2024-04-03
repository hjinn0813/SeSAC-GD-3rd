// package.json에서 type을 module로 지정 필수!
// import는 ES6부터 사용된 키워드

/* 02_module01.js 불러오기 */
import { flowers, getFlower, getFlowersLength } from './02_module01.js';

console.log(flowers);
getFlowersLength();
console.log(getFlower(0));
console.log(getFlower(10));

/* export한 변수, 함수 등을 한번에 가져오는 방법.
(flower라는 별명으로 전부 가져옴)
그러나 이 방법은 메모리 효율과 처리속도가 좋지 않아 비추천하는 방법.
되도록이면 사용할 변수명, 메소드를 명시하는 것이 좋다.
*/
// import * as flower from './02_module01.js';
// console.log(flower);

// ----------------------------------------------------------------------------------------
// 02_module02.js 불러오기
import { animals, showAnimals, addAnimal } from './02_module02.js';
showAnimals();
console.log(addAnimal('horse')); // 배열에 추가된 모습을 불러와야하기 때문에 콘솔로 묶어야 함

// ----------------------------------------------------------------------------------------
// 03_module.js 불러오기

// import sayStatus from './03_module.js';
// sayStatus('sleepy');
// sayStatus('hungry');
// sayStatus('boring');
// sayStatus('hard');
// sayStatus('happy');

import sayStatus2 from './03_module.js';
sayStatus2('sleepy');
sayStatus2('hungry');
sayStatus2('boring');
