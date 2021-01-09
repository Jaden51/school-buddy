import {Link} from "react-router-dom"

function Schools() {
  return (
    <div>Schools listings
      <ul>
        <li>
          <Link to="Schools/UBC"> University of British Columnbia</Link>
        </li>
        <li>
          <Link to="Schools/UT">University of Toronto</Link>
        </li>
        <li>
          <Link to="Schools/UW">University of Waterloo</Link>
        </li>
        <li><Link to="Schools/Langara">Langara College</Link></li>
      </ul>
    </div>
  )
}

export default Schools;
