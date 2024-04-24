interface Props {
  name: string;
  age?: number; // age props를 옵셔널하게 받고 있음
}

/* 방법 1. */
export default function PropsTypes({ name, age }: Props) {
  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>name: {name}</div>
      {age && <div>age: {age}</div>}
    </>
  );
}

/* 방법 2. */
// export default function PropsTypes(props: Props) {
//   const { name, age } = props;

//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//     </>
//   );
// }

/* 방법 3. */
// export default function PropsTypes(props: Props) {
//   const name = props.name;
//   const age = props.age;

//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//     </>
//   );
// }
