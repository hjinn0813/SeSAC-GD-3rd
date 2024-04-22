import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
// index 파일명으로 작성된 파일은 디렉토리만 작성해도 알아서 접근함

import { composeWithDevTools } from '@redux-devtools/extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
1. redux를 가장 쉽게 사용하는 방법 (하나의 상태만 관리, 코드 분리 x)
const store = configureStore({ reducer }); // 인자로 객체를 받고 있음
function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
} */

// 2. redux를 사용해 다수의 상태 관리, 코드 분리한 상태
// -> reducer 따로 만들고 store 관리하는 폴더도 따로 만듦
// src/store/index.js: store의 전체 상태 관리 및 하나로 통합하는 역할
// src/store/modules/CountReducer.js:
// -> 파일 따로 만들어서 각각의 스테이트를 관리하는 reducer
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
