import { Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Layout>
            <PageHeader title="SchoolBuddy" subTitle="Find your school" extra={[
                <Link key="1" to="/">Home</Link>,
                <Link key="2" to="/Schools">Schools</Link>,
                <Link key="3" to="/about">About</Link>,
            ]} />
        </Layout>
    )
}

export default Header;
