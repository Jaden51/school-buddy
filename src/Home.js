import {Link} from "react-router-dom";
import Search from "./components/Search";

function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Schools">Schools</Link>
      <Search />
    </div>
  )
}

export default Home;
