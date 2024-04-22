import { useDispatch, useSelector } from 'react-redux';
import {
  counterMinus,
  counterReset,
  counterPlus,
} from './../store/modules/CountReducer';
import { isLoggedInChange } from '../store/modules/isLoggedInReducer';

export default function UseAllState() {
  // useSelector로 rootReducer에서 관리하는 isLoggedIn state에 접근
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div style={{ border: '5px solid pink', padding: 10 }}>
      <h2>부모 컴포넌트</h2>
      <div>자식으로 Child 컴포넌트를 가짐</div>
      <div>이 컴포넌트는 어떤 props도 전달하지 않음</div>
      <div>
        현재 전역으로 관리되는 isLoggedIn state:{' '}
        {isLoggedIn ? '로그인함^^' : '로그인해주세요ㅠㅠ'}
      </div>
      <Child />
    </div>
  );
}

function Child() {
  // useSelector 사용해서 스토어에서 관리되는 전역 상태 가져오기
  // state.@@ -> rootReducer 함수에 인자로 들어간 객체의 key
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '5px solid skyblue', padding: 5 }}>
      <div>count state: {count}</div>
      <button onClick={() => dispatch({ type: 'count/increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'count/decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'count/reset' })}>reset</button>
      <hr />
      <div>counterReducer에서 정의한 액션 함수 사용</div>
      <button onClick={() => dispatch(counterPlus())}>+1</button>
      <button onClick={() => dispatch(counterMinus())}>-1</button>
      <button onClick={() => dispatch(counterReset())}>reset</button>
      <hr />
      <div>isLoggedIn state 업데이트하기</div>
      <button onClick={() => dispatch({ type: 'isLoggedIn/change' })}>
        type 지정: {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <button onClick={() => dispatch(isLoggedInChange())}>
        함수 불러오기: {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
