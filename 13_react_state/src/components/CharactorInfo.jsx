export default function CharactorInfo({ charactorData }) {
  return (
    <>
      <div>Name: {charactorData.name}</div>
      <div>Age: {charactorData.age}</div>
      <div>NickName: {charactorData.nickName}</div>
    </>
  );
}
