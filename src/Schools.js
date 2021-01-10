import { Link } from "react-router-dom"

function Schools() {
  return (
    <div>Schools listings
      <ul>
        <li>
          <Link to="Schools/University of British Columnbia"> University of British Columnbia</Link>
        </li>
        <li>
          <Link to="Schools/University of Toronto">University of Toronto</Link>
        </li>
        <li>
          <Link to="Schools/University of Waterloo">University of Waterloo</Link>
        </li>
        <li><Link to="Schools/Langara College">Langara College</Link></li>
      </ul>
    </div>
  )
}

export default Schools;
