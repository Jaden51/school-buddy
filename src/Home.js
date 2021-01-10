import { Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";
import Search from "./components/Search";

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <PageHeader title="SchoolBuddy" subTitle="Find your school" extra={[
        <Link key="1" to="/">Home</Link>,
        <Link key="2" to="/Schools">Schools</Link>,
      ]} />
      <Content>

      </Content>

      <div className="home-background" id="home">
        <h1 className="title">
          SchoolBuddy
        </h1>
        <div className="searchBarContainer left-align">
          <Search />
        </div>
        <div class="arrow-container">
          <a href="#about" class="scroll-down" address="true"></a>
        </div>
      </div>

      <div className="aboutus-background" id="about">
        <h1 className="title" id="aboutus-title">About Us</h1>
        <p id="aboutus-paragraph">
          SchoolBuddy is a web application made by students, for students, based in Canada.
          <br></br>
          <br></br>
           With post-secondary education becoming such a large basis for careers, SchoolBuddy serves as an excellent information hub for graduating students looking into post-secondary education.
           <br></br>
          <br></br>
           At SchoolBuddy, students can create posts describing or reviewing multiple aspects of any Canadian University. From school life to academics, SchoolBuddy provides the most optimal platform for students to share critical information to help each student pick the best University for them.
        </p>
        <div class="flex-row" id="icons">
          <a href="https://github.com/ShawnChenXHC/QuicDoc" target="_blank" rel="noreferrer"><i class="fab fa-github fa-3x color-bkg" id="gitHub"></i>
          </a>
        </div>
        <h3 className="empty"> </h3>
      </div>




    </Layout>
  )
}

export default Home;
