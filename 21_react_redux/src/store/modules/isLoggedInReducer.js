// 불리언으로 관리되는 isLoggedIn state
const initialState = false;

export const isLoggedInChange = () => ({
  type: 'isLoggedIn/change',
});

export const isLoggedInReducer = (state = initialState, action) => {
  if (action.type === 'isLoggedIn/change') {
    return !state;
    // 액션의 값에 따라 state 반전시키기
  }
  return state;
};
