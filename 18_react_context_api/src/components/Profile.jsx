import { useContext, useRef } from 'react';
import { AgeContext } from '../contexts/AgeContext';
import { UserContext } from '../contexts/UserContext';

export default function Profile() {
  // AgeContext의 age, setAge; UserContext의 name, setName 모두 사용

  // const ageContext = useContext(AgeContext);
  // console.log(ageContext); // 객체 형태 -> 구조분해할당 가능

  const { age, setAge } = useContext(AgeContext);
  const { name, setName } = useContext(UserContext);

  const ageRef = useRef();
  const nameRef = useRef();

  const ChangeInfo = () => {
    if (
      nameRef.current.value.length < 1 ||
      nameRef.current.value.trim() === ''
    ) {
      alert('이름을 다시 입력해주세요!');
      nameRef.current.focus();
      return;
    } else if (
      ageRef.current.value.length === 0 ||
      ageRef.current.value.trim() === '' ||
      Number(ageRef.current.value) < 0
    ) {
      alert('나이를 다시 입력해주세요!');
      ageRef.current.focus();
      return;
    }

    setAge(Number(ageRef.current.value));
    console.log(nameRef.current.value);
    setName(nameRef.current.value);

    ageRef.current.value = '';
    nameRef.current.value = '';
  };

  return (
    <>
      <h3>user Profile</h3>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <input type="text" placeholder="이름 입력하세요." ref={nameRef} />
      <button onClick={ChangeInfo}>이름 변경하기</button>
      <br />
      <input type="number" placeholder="나이를 입력해주세요." ref={ageRef} />
      <button onClick={ChangeInfo}>프로필 변경~</button>
    </>
  );
}
