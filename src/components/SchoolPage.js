import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import TopicPage from "./TopicPage";
import Header from './Header';
import SchoolData from './schoolData';
import styled from 'styled-components';

function SchoolPage() {
  const { schoolId } = useParams();
  const { path, url } = useRouteMatch();

  function getTwitter() {
    for (var i = 0; i < SchoolData.length; i++) {
      if (SchoolData[i].name === schoolId) {
        return SchoolData[i].twitter;
      }
    }
  }

  if (schoolId != null) {
    return (
      <StyledSchoolPage>
        <div>
          <Header />
          <Switch>
            <Route exact path={path}>
              <div className='header'>{schoolId}</div>
              <div className='col-1-2-left'>
                <ul>
                  <div>
                    <Link to={`${url}/school-life`}>
                      <button className='topic-btn'>School Life</button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`${url}/housing`}>
                      <button className='topic-btn'>Housing</button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`${url}/academics`}>
                      <button className='topic-btn'>Academics</button>
                    </Link>
                  </div>
                </ul>
              </div>
              <div className='col-1-2-right'>
                <a className="twitter-timeline" data-width="95%" data-height="80vh" data-theme="dark" href={getTwitter()}>Tweets by {schoolId}</a>
              </div>
            </Route>
            <Route path={`${path}/:topicId`}>
              <TopicPage />
            </Route>
          </Switch>
        </div>
      </StyledSchoolPage >
    )
  }
}

export default SchoolPage;

const StyledSchoolPage = styled.div`
  .header {
    height: 75px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 95%;
    background: #394867;
    border-radius: 49px;
    font-size: 50px;
    color: white;
    vertical-align: middle;
    padding-left: 20px;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  }
  .topic-btn {
    width: 95%;
    margin: 0 0 20px 0;
    height: 119px;
    background: #394867;
    box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    font-size: 50px;
    color: white;
  }
  .col-1-2-left {
    float: left;
    width: 50%;
  }
  .col-1-2-right {
    float: right;
    width: 50%;
  }
`;
