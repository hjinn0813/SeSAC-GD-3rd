// 간단한 비동기 코드 예시
/* setTimeout 사용해 비동기적으로 코드 실행.
1-3-2 순서로 콘솔에서 확인 가능.
setTimeout은 해당 시간동안 코드가 실행을 멈추는 것이 아니라
setTimeout과 다음 줄에 작성된 코드가 모두 실행되고 있는 것.
하지만 setTimeout의 두번째 인자인 ms 만큼의 시간이 지난 뒤에
setTimeout 내부의 코드를 실행한다.
*/

/* console.log('hi 1');

setTimeout(() => {
  console.log('hi 2');
}, 1000);

console.log('hi 3'); */

// =============================================================
// 비동기 코드를 동기적으로(원하는 순서대로) 실행시키기
// 동기적으로 실행할 부분을 콜백 함수 내부에 작성한다

/* console.log('hi 1');

setTimeout(() => {
  console.log('hi 2');
  console.log('hi 3');
}, 1000); */

// =============================================================
// 사용자에게 아이디 입력받고 비동기적으로 서버 통신을 흉내내는 로그인 로직
/* const id = prompt('아이디를 입력해주세요');
let userId;
console.log('로그인 시도'); */

// 서버와 통신
/* setTimeout(() => {
  userId = 'layla01'; // 서버에서 받아온 id
  console.log('서버에서 아이디 성공적으로 받아옴');
}, 2000); */

/* if (id === userId) {
  console.log('로그인 성공');
} else {
  console.log('로그인 실패');
} */

/* 위 코드가 무조건 '로그인 실패'하는 이유: 
setTimeout의 내부 콜백함수 실행되기 전에 (서버에서 데이터 받아오기 전에)
사용자에게 입력받은 id와 userId(undefined)를 비교하기 때문.
userId는 서버에서 데이터를 받아오지 못했으므로 값이 없으니,
undefined와 id를 비교해서 false가 되어 else절만 실행함. */

// =============================================================
// 정상적으로 입력받은 id와 서버에서 받은 userId를 비교하는 코드

/* setTimeout(() => {
  userId = 'layla01'; // 서버에서 받아온 id

  if (id === userId) {
    console.log('로그인 성공');
  } else {
    console.log('로그인 실패');
  }
}, 2000); */

// =============================================================
// 콜백지옥 예시코드
/* setTimeout(() => {
  let teacherList = '';
  let name = 'layla'; // 임의로 서버에서 받아온 name
  if (!name) {
    console.log('강사 이름을 찾을 수 없습니다!');
  } else {
    teacherList += name;
    console.log(teacherList);
  }
  setTimeout(() => {
    name = 'yuki'; // 임의로 서버에서 받아온 name
    if (!name) {
      console.log('강사 이름을 찾을 수 없습니다!');
    } else {
      teacherList += ', ' + name;
      console.log(teacherList);
    }
    setTimeout(() => {
      name = 'lily'; // 임의로 서버에서 받아온 name
      if (!name) {
        console.log('강사 이름을 찾을 수 없습니다!');
      } else {
        teacherList += ', ' + name;
        console.log(teacherList);
      }
    }, 1000);
  }, 1000);
}, 1000); */

// =============================================================
/* promise를 사용해 비동기 처리를 구현하는 예시 */
/* const id = 'layla01';
let userId;
const promise = new Promise((resolve, reject) => {
  console.log('promise 시작');

  setTimeout(() => {
    userId = 'layla01'; // 서버에서 아이디 받아옴

    if (userId === id) {
      resolve(userId);
    } else {
      reject(new Error('아이디가 틀렸습니다'));
    }
  }, 2000);
});
promise
  .then((data) => {
    console.log(`userId는 ${data}입니다`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('promise 종료');
  }); */

// =============================================================
/* async, await 사용
promise는 then을 체이닝할 수 있어 너무 많은 체이닝을 할 경우 가독성이 떨어짐
이를 해결하기 위한 것이 async, await
promise를 다르게 사용하는 방법
async: 해당 함수 내부에 await을 사용할 것임을 알림
await: 해당 함수가 실행될 때까지 코드를 기다리도록 함 */
/* try & catch:
스코프 실행 도중 어떤 에러나 문제가 발행하면 바로 catch로 이동
finally는 무조건 실행 */

/* const id = 'layla01'; // 성공
// const id = 'layla1' // 실패
let userId;

// promise를 함수에 담아, 해당 함수 호출시 promise 실행되도록 작성
const promiseFunc = () => {
  return new Promise((res, rej) => {
    console.log('promise 시작');

    // 서버에서 데이터 받아오는 시간
    setTimeout(() => {
      userId = 'layla01';

      if (userId === id) {
        res(userId);
      } else {
        rej(new Error('아이디가 틀렸습니다'));
      }
    }, 2000);
  });
};

const checkUserId = async () => {
  try {
    const result = await promiseFunc();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('promise 종료');
  }
};

checkUserId(); */

// =============================================================
/* json: 데이터를 전송하기 위한 경량의 데이터 포맷
여러 언어에서 쉽게 사용할 수 있어 서버와의 통신에서는 json으로 통신한다. */
/* json의 기본 형태
[
  {
    "name" : "장화",
    "age" : 13,
    "Employed" : true,
    "position" : "이사",
    "address" : {
      "gu" : "마포구",
      "city" : "서울시"
    }
  }
] */

const jsonString =
  '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';
// console.log(jsonString.name); js 객체처럼 바로 사용할 수 없음

// json을 js 객체로 파싱하기 (parse)
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);

// js 개체를 json으로 파싱하기 (stringify)
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

// =============================================================
// OPEN API 사용하여 고양이 사진 가져오기
fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const img = document.createElement('img');
    img.src = data[0].url;
    img.setAttribute('width', 500);
    document.querySelector('#cat').append(img);
  });

// =============================================================
// OMDB API 사용해 영화 데이터 받아와 브라우저에 출력
async function getMovieData() {
  let word = 'cat';

  const h3 = document.querySelector('h3');
  h3.innerText = `검색 키워드: ${word}`;

  // fetch로 데이터 불러오기
  // response 변수에는 서버에서 받아온 데이터가 저장됨
  const response = await fetch(
    `http://www.omdbapi.com/?i=@@&apikey=@@&s=${word}`
  );
  const movieData = await response.json();

  console.log(movieData.Search);
  const ul = document.querySelector('ul');

  // 불러온 데이터는 movieData.search 배열 안에 각각의 객체로 있음.
  // movieData.search 배열을 반복문으로 돌아서 각 요소를 만들고 DOM에 추가
  for (let movie of movieData.Search) {
    const div = document.createElement('div'); // 카드 컨테이너
    const img = document.createElement('img'); // 포스터
    const p = document.createElement('p'); // 제목

    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;
    div.append(img, p);
    ul.append(div);
  }
}

// =============================================================
/* JSONplaceholder API 사용해 가짜 데이터로 CRUD 작업하기
JSONplaceholder API: json 형태의 mock data(더미 데이터)를 주는 open api */

// get 요청: 특정 게시물을 가져오는 함수
const getPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// post 요청: 새로운 게시물 생성하는 함수
const postPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: '제목 작성',
      body: '게시물 내용',
      userId: '1',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) =>
      // 브라우저에 렌더링 등 응답으로 받은 데이터를 사용
      console.log(data)
    )
    .catch((err) => {
      // 에러 발생시 원하는 처리방법
      console.log('error:', err);
    });
};

// delete 요청
const deletePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => console.log('delete!'))
    .catch((err) => console.log('del err:', err));
};
