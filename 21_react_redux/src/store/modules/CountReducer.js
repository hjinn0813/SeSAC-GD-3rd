// 초기값
const initialState = 0;

// 액션 타입 정의
/* action.type에 count/~~로 작성하는 이유:
 increment, decrement, reset은 다른 스테이트에서 type으로 사용될 수 있고
 이에 대한 특정을 명확하게 하여 원하는 로직 실행하기 위함
*/

// counterMinus는 함수
// counterMinus() 호출하면 {type: 'decrement'} 객체 반환
// dispatch(counterMinus()) == dispatch({type: 'decrement'})

export const counterMinus = () => ({
  type: 'count/decrement',
});

export const counterPlus = () => ({
  type: 'count/increment',
});

export const counterReset = () => ({
  type: 'count/reset',
});

// reducer
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'count/increment':
      return state + 1;
    case 'count/decrement':
      return state - 1;
    case 'count/reset':
      return 0;
    default:
      return state;
  }
};
