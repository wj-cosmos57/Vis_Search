import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
        <h1>홈</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <ul>
          <li>
            <Link to="/profiles">urlParameter 방식</Link>
          </li>
          <li>
            <Link to="/querystring">queryString 방식</Link>
          </li>
          <li>
            <Link to="/result">Result</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Home;