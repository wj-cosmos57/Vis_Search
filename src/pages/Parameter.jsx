import { Link } from "react-router-dom";

  const About = () => {
    return (
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <ul>
          <li>
            <Link to="/profiles/velopert">velopert의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">gildong의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/void">존재하지 않는 프로필</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default About;