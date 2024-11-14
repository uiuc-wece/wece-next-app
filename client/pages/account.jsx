import AccountLayout from "../components/accountlayout";
import AccountWidget from "../components/accountwidget";
// import SectionHead from "../components/sectionhead";
import styles from "../styles/Account.module.css";

import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Account = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const { firstName, lastName, accountType, totalPoints } = useSelector(
    (state) => state
  );

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }
  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <AccountWidget>
              <div className={styles["name"]}>{`${firstName} ${lastName}`}</div>
              <div className={styles["account-type"]}>{accountType}</div>
            </AccountWidget>
            <AccountWidget>
              <div className={styles["points"]}>
                {totalPoints ? totalPoints : 0}{" "}
                <span className={styles["points-text"]}>points</span>
              </div>
            </AccountWidget>
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Account;
