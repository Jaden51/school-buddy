import {useParams,
  useRouteMatch,
  Switch,
  Route,
  Link} from 'react-router-dom'

function Schools() {
  const {schoolId} = useParams();

  let { path, url } = useRouteMatch();
  console.log(url)
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
            <Topic />
          </Route>
      </Switch>
    </div>
    )
  }
}

function Topic() {
  
  const {schoolId, topicId} = useParams();
  console.log(topicId)
  return (
    <div>
      <h3>{topicId} at {schoolId}</h3>
    </div>
  );
}

export default Schools;
