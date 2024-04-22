// redux toolkit의 createSlice 사용해 reducer, action 동시에 정의
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    },
    // 리셋 로직
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, increase, decrease, reset } =
  countSlice.actions;
export default countSlice.reducer;
