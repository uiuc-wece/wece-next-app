import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Contactus.module.css";

import Container from "react-bootstrap/Container";

export default function ContactUs() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Contact Us_" top={true} />
          <SectionBody
            hoverEffect={true}
            link="mailto:wece.uiuc@gmail.com?subject=WECE%20Contact%20Us"
          >
            <h2 className={styles["contact-title"]}>Email</h2>
            <p className={styles["contact-desc"]}>
              Contact us with any questions at wece.uiuc@gmail.com
            </p>
          </SectionBody>
          <SectionBody
            hoverEffect={true}
            link="https://discord.gg/6hCJBtST"
          >
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Join us on Discord!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="discord"
                src="89b13b996c7ecf9eee5e797a812696a6.jpg"
              />
            </div>
          </SectionBody>
          <SectionBody
            hoverEffect={true}
            link="https://www.instagram.com/wece.uiuc/"
          >
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Follow us on Instagram!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="instagram"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTZweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODguNjA3LDEyNC41MDZjMC4zMzcsMTQuMzcxLDEuMTEzLDM1LjUyMy0wLjYwNyw0MS40OTRjLTEuNzIxLDUuOTcxLTcuNzkzLDExLjYzOS0xMi45NTQsMTMuOTY2ICBjLTUuMTYxLDIuMzI4LTczLjg4LDEuMDEyLTc3LjUyNCwwcy05LjEwOS04LjgwNS0xMC4zMjMtMTEuNjM5Yy0xLjIxNC0yLjgzNC0wLjYwNy03Mi4wNTksMC44MS03Ny44MjcgIGMxLjQxNy01Ljc2OSw2LjM3Ni05LjEwOSwxMC45My0xMS4xMzNjNC41NTQtMi4wMjQsNTMuNTcyLTEuMjE0LDYyLjU0NS0wLjgxYzguOTc0LDAuNDA1LDE2LjkzNSw0Ljg1OCwxNy42MSwxMS41MzcgIGMwLjY3NSw2LjY4LTMuOTgyLDkuMzc4LTkuNTE0LDguOTA2Yy01LjUzMi0wLjQ3Mi05LjIyNi01LjcwOC02LjA2NC05LjcwMmMzLjE2My0zLjk5NCwyMC44MzctNC45NzMsMjMuMjY3LDAuMTg5ICBjMi40MzEsNS4xNjIsMi41MjksMTcuNjI0LTAuODEsMjAuNjUzYy0zLjMzOCwzLjAyOS0yNS4xOTktMS4wOTgtMjguNTUxLDAuMTkyYy0zLjM1MiwxLjI5LDEzLjI3MSwxNC4yNzMsMi40MTYsMzQuMjA0ICBjLTcuMTEzLDExLjQ2Ny0yMi42NzIsMTYuODIxLTM1LjA0MywxMC4zMTdjLTEzLjU3MS03LjEzNi0xNS42NTYtMjQuNDk4LTEwLjk4MS0zNS42MzdjMC41ODEtMS4zODUsNi4xMjEtMTQuMjU1LDE5LjEyOC0xNi4wMTYgIGM3LjYzOS0xLjAzNCwyMi4yNjUsMi4yNzcsMTcuMjA1LDYuODMxYy01LjA2LDQuNTU0LTQ2LjE1LTEuMTEzLTU2LjA2OCwwLjkxMSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDguNzI4LDI5Ljk0N2MtNTguMTU0LDE4LjE5NS04OS40NjQsODAuOTQxLTcwLjMxNCwxMzQuNzUzYzE4LjY5Nyw1Mi41MzksNzguNTksNzkuMTgyLDEzMC45MDUsNjIuNDIzICBjNTMuMDM2LTE2Ljk5LDg1LjkwNy03NC43Myw3MC4wMTUtMTI4LjM4Yy0yNS4zMzUtODMuNzA3LTExMC4yNDUtNzUuNDA1LTExMy41MTEtNzMuMzc5Ii8+PC9zdmc+"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
