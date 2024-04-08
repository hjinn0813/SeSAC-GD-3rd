import { useState } from 'react';
import CharactorInfo from './CharactorInfo';

export default function CharactorsContainer() {
  // 사용자의 데이터가 담긴 객체의 배열 = 초기값
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      id: 2,
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      id: 3,
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ]);

  // selectedCharacter state 선언
  // 선택된 캐릭터의 정보를 객체 형태로 저장할 예정
  // 선택된게 없을때 CharactorInfo 컴포넌트 렌더링 금지 조건
  // -> 초기값을 null로 줘서 아무 것도 안 보이도록 조건부 렌더링
  const [selectedCharacteor, setSelectedCharactor] = useState(null);

  // handleClick 함수 (인자: 선택된 버튼의 name 값)
  // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
  // selectedCharacter state에 저장
  const handleClick = (name) => {
    const selected = characters.find((charactor) => charactor.name === name);
    setSelectedCharactor(selected);
  };

  return (
    <div>
      {/* characters 배열 순회하며 버튼 렌더링 하기 */}
      {characters.map((charactor) => (
        <button key={charactor.id} onClick={() => handleClick(charactor.name)}>
          {charactor.name}
        </button>
      ))}

      {/* 선택된 캐릭터 정보를 props로 전달하기 */}
      {/* selectedCharacteor state의 값이 없으면 CharactorInfo 컴포넌트 렌더링 X */}
      {selectedCharacteor && (
        <CharactorInfo charactorData={selectedCharacteor} />
        // key값이랑 props랑 같아야 함
      )}
    </div>
  );
}
