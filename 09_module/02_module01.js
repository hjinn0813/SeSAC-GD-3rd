// ES6 - 한번에 exports 시키기

const flowers = ['cherry blossom', 'rose', 'tulip'];
function getFlowersLength() {
  console.log(flowers.length);
  // 콘솔에 찍어주고 있어서 import했을 경우 호출만 해도 결과 출력됨
}

function getFlower(idx) {
  if (idx >= flowers.length || idx < 0) {
    return 'x';
  }

  return flowers[idx];
}

export { flowers, getFlowersLength, getFlower };
