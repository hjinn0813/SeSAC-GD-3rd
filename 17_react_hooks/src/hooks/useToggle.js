import { useState } from 'react';

/* 토글은 2가지 상태만 가지고 있어, 서로 다른 값으로 반전시키는 기능
useToggle은 컴포넌트 조건부 렌더링, 체크박스, 다크모드 전환, 모달 열기 등에 사용
-> 토글 기능은 결국 동일한 로직으로 이루어져있어서
로직을 반복할 필요 없이 커스텀하여 사용하면 편리하다 */
export default function UseToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}
