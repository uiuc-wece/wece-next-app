import AccountLayout from "../components/accountlayout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Account = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const firstName = useSelector((state) => state.firstName);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }
  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="Account_" top={true} />
            <SectionBody>{`Hello ${firstName}!`}</SectionBody>
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Account;
