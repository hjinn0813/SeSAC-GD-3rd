export default function Prac() {
  const helloStr = 'Hello, this is first practice';

  return (
    <div
      style={{ marginTop: '32px', backgroundColor: 'pink', cursor: 'pointer' }}
      onClick={() => {
        alert('클릭!');
      }}
    >
      {helloStr}
    </div>
  );
}
