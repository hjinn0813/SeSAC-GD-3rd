import { useNavigate } from 'react-router-dom';

export default function BoardDetail() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate('/board')}>게시판으로</button>
      <button onClick={() => navigate('/')}>홈으로</button>
      <h1>여기는 Board Detail 페이지 컴포넌트</h1>
    </>
  );
}
