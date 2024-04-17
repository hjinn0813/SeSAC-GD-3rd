import useToggle from '../hooks/useToggle.js';
import useTitle from './../hooks/useTitle';

export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  // const [isShow, setIsShowState] = useState(false);
  // const setIsShow = () => {setIsShowState(!isShow)}
  // 여기서는 setter 함수가 아니라 useToggle Hook에서 선언한 isShow의 값을 반전시키는 함수

  const [isQnaOpen, setIsQnaOpen] = useToggle();
  // const [isQnaOpen, setIsQnaOpenState] = useState(false);
  // const setIsQnaOpen = () => {setIsQnaOpenState(!isQnaOpen)}

  // useTitle hook 사용하기
  useTitle('custom hook 사용해서 변경함!');

  return (
    <>
      <h1>커스텀 훅 사용</h1>
      <button onClick={setIsShow}>useToggle hook 사용하기</button>
      {isShow && <div>안녕!</div>}
      <hr />
      <div onClick={setIsQnaOpen}>Q. 리액트에서 Custom Hook 만들기 가능?</div>
      {isQnaOpen && <div>A. 가능합니다~</div>}
      {/* 둘 다 useToggle로 묶었지만 따로 움직임 */}
    </>
  );
}
