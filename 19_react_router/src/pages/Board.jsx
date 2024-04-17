import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <h1>board 컴포넌트</h1>
      <div
        onClick={() => {
          // navigation에 인자로 슬래시 없이 값을 보내면 주소 뒤에 슬래시 붙음
          // ex. navigation('1'); -> localhost/board/1
          // 슬래시를 작성하면 무조건 루트 기준으로 이동
          // ex. navigation('/1'); -> localhost/1
          navigation('1');
        }}
      >
        1번 게시글 보러 가기
      </div>
    </>
  );
}
