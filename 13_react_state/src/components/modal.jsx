import React from 'react';

export default function modal(props) {
  /*
  - msg: 모달에서 보여줄 메세지
  - isInput: 인풋창 보여줄지 여부
  - isCancelBtn: 취소 버튼 보여줄지 여부
  - setShow: 부모 컴포넌트 show state의 setter 함수
  */
  const { msg, isInput, isCancelBtn, setShow } = props;

  return (
    <div className="modal-container">
      <button onClick={() => setShow(false)}>X</button>
      {/* 모달 사라지는 버튼 */}

      <div>{msg}</div>
      {isInput && <input type="text" />}

      <button
        onClick={() => {
          // 확인 버튼 클릭시 원하는 로직 작성
          console.log('확인 버튼을 클릭했습니다');

          // 모달 컴포넌트 없애기 위한 로직
          setShow(false);
        }}
      >
        확인
      </button>

      {isCancelBtn && <button onClick={() => setShow(false)}>취소</button>}
    </div>
  );
}

Modal.defaultProps = {
  msg: '기본 메시지',
  isInput: false,
  isCancelBtn: false,
};
