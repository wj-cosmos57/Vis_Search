import { Link, Outlet } from "react-router-dom";
import Home from "./Home";

  const Parameter = () => {
    return (
      <div>
        <p>
          <Link to="/">Home으로 돌아가기</Link>
        </p>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <ul>
          <li>
            <Link to="/profiles/wooju">wooju의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">gildong의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/void">존재하지 않는 프로필</Link>
          </li>
        </ul>

        <Outlet />
        {/*이 부분에서 중첩된 Route의 컴포넌트가 렌더링됩니다. */}
      </div>
    );
  };

  
  export default Parameter;