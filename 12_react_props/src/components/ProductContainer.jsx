import ProductItem from './ProductItem';

export default function ProductContainer({ products }) {
  return (
    <div>
      {/* ? : 데이터가 없으면 map 돌지 않도록 하는 기능 */}
      {products?.map((prod) => {
        return <ProductItem prodData={prod} key={prod.id} />;
        // return <ProductItem prodData={prod} key={`prod_${index}`} />;

        // ?: 데이터가 들어오지 않는 경우를 대비해 사용.
        /* products라는 props가 전달되지 않는 것 자체에는 에러가 발생하지 않지만,
        products를 사용하는 순간 에러 발생하게 됨 */
        // 오류를 방지하기 위해 ? 사용할 수 있다.
        /* 
        해당 props가 전달되었다면 체이닝된 메소드를 사용하고, 아니라면 실행하지 않는다.
        그러므로 해당 코드에서는 products라는 props가 전달되었다면 
        map 메서드를 사용해 products 배열을 순회하면서 
        배열의 길이만큼 아이템을 브라우저에 렌더링하지만 
        products라는 props가 전달되지 않았다면 map 메소드 자체가 동작하지 않음. 
        -> 오류도 없음
        */

        /* key: 기본 요소와 업데이트 요소를 비교할 때 사용하는 속성
          - 다른 요소와 겹쳐지지 않는 고유한 값을 가지고 있어야 한다.
          - 배열의 요소 중 고유한 값(id)이 없다면 **최후의 수단** 으로 index 사용
          * 콜백함수 중괄호 사용했으면 return 키워드 필수!
         */
      })}

      {products?.map((prod) => {
        <ProductItem prodData={prod} key={prod.id} />;
      })}
    </div>
  );
}
