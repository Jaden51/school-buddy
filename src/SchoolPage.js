import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import TopicPage from "./TopicPage";

function SchoolPage() {
  const { schoolId } = useParams();
  const { path, url } = useRouteMatch();

  if (schoolId != null) {
    return (
      <div>
        <Switch>
          <Route exact path={path}>
            <h3>School page for {schoolId}</h3>
            <ul>
              <li>
                <Link to={`${url}/Student Life`}>Student Life</Link>
              </li>
              <li>
                <Link to={`${url}/Housing`}>Housing</Link>
              </li>
              <li>
                <Link to={`${url}/Academics`}>Academics</Link>
              </li>
            </ul>
          </Route>
          <Route path={`${path}/:topicId`}>
            <TopicPage />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default SchoolPage;
