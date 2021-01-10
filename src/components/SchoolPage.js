import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import TopicPage from "./TopicPage";
import Header from './Header';

function SchoolPage() {
  const { schoolId } = useParams();
  const { path, url } = useRouteMatch();

  if (schoolId != null) {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={path}>
            <h3>School page for {schoolId}</h3>
            <ul>
              <li>
                <Link to={`${url}/school-life`}>School Life</Link>
              </li>
              <li>
                <Link to={`${url}/housing`}>Housing</Link>
              </li>
              <li>
                <Link to={`${url}/academics`}>Academics</Link>
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
