export default function PracContainer({ children }) {
  return (
    <>
      <header>~~ Post List ~~</header>
      <main>{children}</main>
      {/* main 내부에 <PracFakePost /> 컴포넌트가 들어가게 됨 */}
      <footer>FOOTER</footer>
    </>
  );
}
