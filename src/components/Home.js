import { Layout } from "antd";
import Search from "./Search";
import Header from './Header';

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <Header />
      <Content>
        <Search />
      </Content>
    </Layout>
  )
}

export default Home;
