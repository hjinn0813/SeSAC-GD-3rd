import '../styles/sass.scss';

export default function Sass() {
  return (
    <>
      <h2>SASS의 .scss 확장자 사용</h2>
      <div className="sass-box">.box</div>
      <div className="sass-var">.var</div>
      <div className="sass-var2">.var</div>
      <div className="sass-calc">.calc</div>
      <hr />
      <div className="sass-div1">
        <div className="sass-div2">
          <div className="sass-div3">중첩</div>
        </div>
      </div>
      <hr />
      <div className="sass-mixin">mix-in</div>
      <hr />
      <button className="sass-btn">기본 버튼</button>
      <button className="sass-btn-extends">
        sass-btn 스타일 상속받은 버튼
      </button>
      <hr />
      <div className="sass-for-container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
      </div>
      <div className="sass-use-if">@if문 사용</div>
    </>
  );
}
