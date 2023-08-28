import { useParams } from 'react-router-dom';

const data = {
  wooju: {
    name: '이우주',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};
// data 객체에 예시 프로필 정보들을 key-value 형태로 담아둠

const Profile = () => {
  const params = useParams();
//   useParams : URL 파라미터를 객체 형태로 조회할 수 있는 HOOK
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};
// profile 컴포넌트에서 username URL 파라미터를 통하여 프로필을 조회한뒤에 프로필 존재 여부에 따라 대응하는 페이지

export default Profile;