// import '../styles/basicCss.css';

export default function BasicCss() {
  const divStyle = {
    backgroundColor: 'navy',
    color: 'pink',
    textAlign: 'center',
    fontWeight: 700,
  };

  return (
    <>
      <h1>일반 CSS 사용하기</h1>
      <div
        style={{
          backgroundColor: 'pink',
          color: 'navy',
          fontSize: 25,
          textAlign: 'right',
        }}
      >
        인라인으로 스타일 적용(태그에 직접 작성)
      </div>
      <div style={divStyle}>인라인으로 스타일 적용(객체 변수 전달)</div>
      <br />
      <hr />
      <h3>CSS 파일 사용해서 스타일링</h3>
      <div className="box">.box</div>
      <div className="container">
        <div className="item item1">.item.item1</div>
        <div className="item">.item</div>
      </div>
    </>
  );
}
